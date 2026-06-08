# Gestor Certo — Site institucional (gestorcerto.com.br)

Site estático moderno do ecossistema **Grupo Gestor / Gestor Certo**.
HTML semântico + CSS/JS puro (sem framework) — rápido, leve e otimizado para SEO e para IAs.

## Páginas
- `index.html` — Home (ecossistema, números, núcleo, setores)
- `contabilidade.html` — Contabilidade & Fiscal (o núcleo)
- `rh.html` — Pessoas, RH & Benefícios
- `solucoes.html` — Soluções CotaFácil (consórcios, seguros, crédito, financiamentos)
- `mei.html` — MEI no automático (→ grupogestormei.com.br)
- `tecnologia.html` — Tecnologia, IA & Fidelização
- `contato.html` — Formulário (abre o WhatsApp) + canais
- `404.html` — Página de erro

## Otimizações já incluídas
- **SEO clássico:** `<title>`/meta description por página, canonical, Open Graph + Twitter Card, `sitemap.xml`, `robots.txt`, headings semânticos, alt nas imagens.
- **SEO para IA / LLMs:** dados estruturados JSON-LD (AccountingService, WebSite, WebPage, Service, FAQPage) em todas as páginas + arquivo **`llms.txt`** descrevendo todo o ecossistema para mecanismos de IA.
- **Performance:** CSS/JS minimalistas, fontes com `preconnect`, imagens com dimensões, cache e gzip via `.htaccess`.
- **PWA básico:** `site.webmanifest` + favicons.
- **Segurança:** cabeçalhos (X-Content-Type-Options, X-Frame-Options, Referrer-Policy) + HTTPS forçado no `.htaccess`.

## ⚠️ Confirmar antes de publicar
Os dados abaixo foram preenchidos a partir dos seus arquivos (SPED ECF / projetos). **Confira:**
- **WhatsApp:** (11) 97575-0091 → `wa.me/5511975750091`
- **E-mail:** contato@gestorcerto.com.br
- **Endereço:** Rua Heraklit, 8 — Jaguaré, São Paulo/SP — CEP 05323-020
- **Instagram:** @grupo_gestorcontabil

Para alterar qualquer dado, edite as variáveis no topo de `build.py` e rode `python build.py && python gen_pages.py`.

## Como publicar na Hostinger
1. No hPanel, abra o **Gerenciador de Arquivos** e entre em `public_html`.
2. **Faça backup** do site atual (baixe ou renomeie a pasta).
3. Envie para `public_html` APENAS estes arquivos/pastas:
   - Todos os `*.html`
   - `assets/` (css, js, img)
   - `sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest`, `.htaccess`
4. **NÃO** envie os arquivos de desenvolvimento: `build.py`, `gen_pages.py`, `_shot.py`, `_shots/`, `.claude/`, `LEIA-ME.md`.
5. Acesse https://gestorcerto.com.br e confira.
6. No **Google Search Console**, reenvie o `sitemap.xml`.

## Pré-visualizar localmente
Dê dois cliques em **`abrir_local.bat`** (abre em http://localhost:8090).

## Observação sobre o formulário de contato
O formulário **abre o WhatsApp** com a mensagem pronta (não precisa de servidor/PHP).
Se quiser também receber por e-mail, dá para adicionar um pequeno script PHP — me peça.
