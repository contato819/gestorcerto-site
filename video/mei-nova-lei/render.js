// Renderiza index.html quadro a quadro e sobrepõe o vídeo original do apresentador (fonte-jefferson.mp4) com o áudio dele.
// Requisitos: Node, Playwright (Chromium) e ffmpeg.
// Uso:  node render.js [saida.mp4]
//       node render.js --still 12.5 quadro.png   (um quadro só, para conferência)
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');

const FPS = 30;
const WORKERS = 4;
const page_url = 'file://' + path.join(__dirname, 'index.html') + '?render';

async function open(browser) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto(page_url);
  await page.evaluate(() => document.fonts.ready);
  return page;
}

async function renderChunk(browser, from, to, file) {
  const page = await open(browser);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '17', '-pix_fmt', 'yuv420p', '-r', String(FPS), file], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res, rej) => ff.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg ' + c)))));
  for (let f = from; f < to; f++) {
    await page.evaluate(t => window.VIDEO.render(t), f / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await done;
  await page.close();
}

function run(cmd, args) {
  return new Promise((res, rej) => spawn(cmd, args, { stdio: 'inherit' }).on('close', c => (c === 0 ? res() : rej(new Error(cmd + ' ' + c)))));
}

(async () => {
  const browser = await chromium.launch();
  const args = process.argv.slice(2);
  if (args[0] === '--still') {
    const page = await open(browser);
    await page.evaluate(t => window.VIDEO.render(t), parseFloat(args[1]));
    await page.screenshot({ path: args[2] || 'quadro.png' });
    await browser.close();
    return;
  }
  const out = path.resolve(args[0] || path.join(__dirname, 'mei-nova-lei.mp4'));
  const probe = await open(browser);
  const total = Math.round((await probe.evaluate(() => window.VIDEO.duration)) * FPS);
  await probe.close();

  const fs = require('fs'), os = require('os');
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'video-'));
  const size = Math.ceil(total / WORKERS), parts = [];
  await Promise.all([...Array(WORKERS)].map((_, i) => {
    const file = path.join(tmp, `p${i}.mp4`);
    parts.push(file);
    return renderChunk(browser, i * size, Math.min(total, (i + 1) * size), file);
  }));
  await browser.close();

  const list = path.join(tmp, 'list.txt');
  fs.writeFileSync(list, parts.map(p => `file '${p}'`).join('\n'));
  // Junta as partes da animação, sobrepõe o vídeo do apresentador (com cantos arredondados) e usa o áudio original.
  // O vídeo do apresentador sai em CUT (antes da vinheta original); o áudio segue 0,8 s para não cortar a última palavra.
  const CUT = 90.7, total_s = total / FPS, src = path.join(__dirname, 'fonte-jefferson.mp4'), mask = path.join(__dirname, 'mascara.png');
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list, '-t', String(CUT + 0.8), '-i', src, '-loop', '1', '-i', mask,
    '-filter_complex',
    `[1:v]trim=duration=${CUT},fps=${FPS},scale=524:940:flags=lanczos,format=yuva420p[v];[2:v]format=gray[m];[v][m]alphamerge,fade=out:st=${CUT - 0.3}:d=0.3:alpha=1[pv];` +
    `[0:v][pv]overlay=110:70:eof_action=pass[out];` +
    `[1:a]loudnorm=I=-16:TP=-1.5:LRA=11,afade=out:st=${CUT + 0.4}:d=0.4,apad=whole_dur=${total_s},aresample=48000[a]`,
    '-map', '[out]', '-map', '[a]', '-t', String(total_s), '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-b:a', '160k', '-movflags', '+faststart', out]);
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log('OK', out, total + ' quadros');
})();
