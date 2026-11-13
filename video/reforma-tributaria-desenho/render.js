// Renderiza index.html quadro a quadro em MP4 (1920x1080, 30 fps).
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
  const out = path.resolve(args[0] || path.join(__dirname, 'reforma-tributaria-desenho.mp4'));
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
  // Junta as partes e inclui uma faixa de áudio em silêncio (a narração é gravada depois).
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list,
    '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=48000',
    '-c:v', 'copy', '-c:a', 'aac', '-b:a', '128k', '-shortest', '-movflags', '+faststart', out]);
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log('OK', out, total + ' quadros');
})();
