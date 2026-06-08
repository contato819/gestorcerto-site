# Vídeos — App Grupo Gestor MEI

## Status
Os vídeos foram **estruturados na página MEI** (`/mei.html`) mas precisam de URLs de streaming para funcionar.

## Vídeos a integrar
1. **J03290_9x16_01.mp4** — localização: `C:\Users\abdal\Meu Drive\01 Administrativo\ADM DO GRUPO\05 APP MEI\`
2. **Cópia de tutorial_app_grupo_gestor_mei_nf_produto (720p).mp4** — mesmo local

## Como integrar
### Opção 1: Upload para YouTube (recomendado para SEO/sharing)
1. Faça upload dos vídeos no YouTube (canal Grupo Gestor ou Gestor Certo)
2. Copie o ID do vídeo (ex: `dQw4w9WgXcQ`)
3. Atualize as URLs em `gen_pages.py` — seção MEI:
   ```html
   <iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>
   ```

### Opção 2: Hostinger File Manager
1. Compacte os vídeos em MP4 (720p recomendado para carga rápida)
2. Envie para `public_html/assets/videos/`
3. Atualize as URLs em `gen_pages.py`:
   ```html
   <source src="/assets/videos/mei_tutorial_01.mp4" type="video/mp4">
   ```

### Opção 3: Google Drive com embed público
1. Publique os vídeos no Google Drive (compartilhar público)
2. Extraia a URL de visualização
3. Copie o ID do arquivo e use: `https://drive.google.com/file/d/FILE_ID/preview`

## Instagram + vídeos
Após publicar os vídeos, compartilhe também no **@gestorcertocotafacil** (soluções) e **@grupo_gestorcontabil** (principal).

## Estrutura HTML pronta
A seção de vídeos já está estruturada em `gen_pages.py`:
- Grid 2 colunas (responsivo em mobile)
- Placeholder com ícone do app
- Controls de play/pause
- Fallback link caso navegador não suporte

Basta atualizar as URLs de `src` quando os vídeos estiverem hospedados.
