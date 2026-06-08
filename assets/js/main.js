/* GESTOR CERTO — main.js (vanilla, leve) */
(function () {
  'use strict';

  // --- Header shadow on scroll ---
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Mobile nav toggle ---
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('.nav__links a').forEach((a) =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      })
    );
  }

  // --- Dropdowns ---
  document.querySelectorAll('[data-drop]').forEach((d) => {
    const btn = d.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = d.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      document.querySelectorAll('[data-drop].open').forEach((o) => { if (o !== d) o.classList.remove('open'); });
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('[data-drop].open').forEach((o) => o.classList.remove('open'));
  });

  // --- Reveal on scroll ---
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            const el = e.target;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
            setTimeout(() => el.classList.add('in'), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
    // Rede de segurança: garante que nada fique invisível caso o observer
    // não dispare (ex.: captura full-page, navegadores antigos).
    window.addEventListener('load', () => {
      setTimeout(() => reveals.forEach((el) => el.classList.add('in')), 2500);
    });
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // --- Current year in footer ---
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // --- Contact form -> WhatsApp (no backend needed on Hostinger) ---
  const form = document.querySelector('#contato-form');
  if (form) {
    const WA = form.dataset.wa || '5511975750091';
    // Pré-seleção do "Interesse" via hash (#certificado, #app-mei, etc.)
    const HASH_MAP = {
      certificado: 'Certificado digital',
      'app-mei': 'App MEI / Assinatura',
      mei: 'MEI (outros serviços)',
      abertura: 'Abertura de empresa',
      rh: 'RH, folha & eSocial',
      beneficios: 'Benefícios',
      solucoes: 'Consórcios / Seguros / Crédito',
    };
    const applyHash = () => {
      const k = (location.hash || '').replace('#', '').toLowerCase();
      const v = HASH_MAP[k];
      const sel = form.querySelector('select[name="servico"]');
      if (v && sel) {
        [...sel.options].forEach((o) => { if (o.text === v) sel.value = o.value || o.text; });
        form.querySelector('input[name="nome"]')?.focus();
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const d = new FormData(form);
      const nome = (d.get('nome') || '').toString().trim();
      const empresa = (d.get('empresa') || '').toString().trim();
      const servico = (d.get('servico') || '').toString().trim();
      const msg = (d.get('mensagem') || '').toString().trim();
      const email = (d.get('email') || '').toString().trim();
      let txt = `Olá! Vim pelo site da Gestor Certo.%0A%0A`;
      txt += `*Nome:* ${nome}%0A`;
      if (empresa) txt += `*Empresa:* ${empresa}%0A`;
      if (email) txt += `*E-mail:* ${email}%0A`;
      if (servico) txt += `*Interesse:* ${servico}%0A`;
      if (msg) txt += `*Mensagem:* ${msg}`;
      window.open(`https://wa.me/${WA}?text=${txt}`, '_blank', 'noopener');
      const ok = form.querySelector('.form-success');
      if (ok) ok.hidden = false;
      form.reset();
    });
  }
})();
