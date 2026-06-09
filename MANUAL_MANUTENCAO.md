# 📖 MANUAL DE MANUTENÇÃO - Gestor Certo Website

## 🎯 Sumário
1. [Como manter o site atualizado](#1-como-manter-o-site-atualizado)
2. [Editando conteúdo](#2-editando-conteúdo)
3. [Alterando links do menu](#3-alterando-links-do-menu)
4. [Adicionando/removendo páginas](#4-adicionandoremovendo-páginas)
5. [Admin/Painel vs Site Estático](#5-adminpainel-vs-site-estático)
6. [FAQ](#6-faq)

---

## 1. Como manter o site atualizado

### ⚡ O MÉTODO AUTOMÁTICO (Recomendado)

O site está configurado para **deploy automático via GitHub Actions**. Sempre que você faz um `push` para o GitHub, o site atualiza automaticamente em 1-2 minutos.

### 📋 Passo a Passo para Atualizar o Site:

**PASSO 1:** Abra o Git Bash ou PowerShell na pasta do projeto:
```bash
cd C:\Users\abdal\gestorcerto-github
```

**PASSO 2:** Verifique o status (opcional):
```bash
git status
```

**PASSO 3:** Adicione os arquivos alterados:
```bash
git add .
```

**PASSO 4:** Crie um commit com mensagem descritiva:
```bash
git commit -m "Descrição do que foi alterado"
```

**Exemplos de boas mensagens:**
- `git commit -m "Atualizar telefone de contato"`
- `git commit -m "Adicionar novo serviço ao menu"`
- `git commit -m "Corrigir link do Blog"`

**PASSO 5:** Faça push para o GitHub:
```bash
git push origin main
```

**PRONTO!** ✅ O site atualiza automaticamente!

### 🔄 Como Verificar se o Deploy funcionou:

1. Acesse: https://github.com/contato819/gestorcerto-site/actions
2. Procure o commit que você acabou de fazer
3. Aguarde o status ficar **verde (✅ Success)**
4. Acesse https://gestorcerto.com.br para confirmar

---

## 2. Editando conteúdo

### 📝 Editando Textos do Site

Todos os textos estão no arquivo **`index.html`**. Você pode editar com qualquer editor de texto.

**Para editar um texto:**

1. Abra o arquivo: `C:\Users\abdal\gestorcerto-github\index.html`
2. Use `Ctrl+F` para procurar o texto que quer mudar
3. Altere o texto
4. Salve (Ctrl+S)
5. Siga os passos 3-5 da seção anterior

**Exemplo: Mudar o slogan**
```html
Procure por:
<h1>Grupo Gestor ser a base para Tomada de Decisões é o nosso motor</h1>

Altere para:
<h1>Seu novo slogan aqui</h1>
```

### 🎨 Editando Cores/Estilos

As cores e estilos estão em: `assets/css/styles.css`

**Exemplo: Mudar cor do botão**
```css
Procure por: .btn-primary
Altere a cor em: background: #sua-nova-cor;
```

### 🖼️ Alterando Imagens/Logos

1. Coloque a nova imagem em: `assets/img/`
2. No `index.html`, mude o caminho da imagem:
```html
De: <img src="assets/img/logo-grupogestor.png">
Para: <img src="assets/img/novo-logo.png">
```

---

## 3. Alterando links do menu "Acessos"

### 📌 Localizar o Menu

Procure por `menu` ou `navbar` no `index.html`:

```html
<nav class="navbar">
  <a href="#inicio">Início</a>
  <a href="#contabilidade">Contabilidade</a>
  <a href="#rh">RH & Benefícios</a>
  <a href="#solucoes">Soluções</a>
  <a href="#mei">MEI</a>
  <a href="#tecnologia">Tecnologia</a>
  <a href="#blog">Blog</a>
  <a href="/acessos">Acessos</a>  <!-- ← AQUI -->
  <a href="#contatos">Contatos</a>
</nav>
```

### 🔗 Mudando o Link "Acessos"

**Encontre:**
```html
<a href="/acessos">Acessos</a>
```

**Mude para:**
```html
<!-- Opção 1: Link para um site externo -->
<a href="https://suaaplicacao.com.br">Acessos</a>

<!-- Opção 2: Link para email -->
<a href="mailto:contato@gestorcerto.com.br">Acessos</a>

<!-- Opção 3: Link para WhatsApp -->
<a href="https://wa.me/5511999999999">Acessos</a>

<!-- Opção 4: Abrir em nova aba -->
<a href="https://suaaplicacao.com.br" target="_blank">Acessos</a>
```

### 📝 Exemplo Prático:

Se seus clientes acessam via: `https://app.gestorcerto.com.br`

Então mude para:
```html
<a href="https://app.gestorcerto.com.br" target="_blank">Acessos</a>
```

**Depois faça:**
```bash
git add .
git commit -m "Atualizar link de Acessos para app.gestorcerto.com.br"
git push origin main
```

---

## 4. Adicionando/Removendo Páginas

### ✨ Criando uma Nova Página

**PASSO 1:** Copie o `index.html` e renomeie para `sua-pagina.html`

**PASSO 2:** Edite o conteúdo dessa página

**PASSO 3:** Adicione um link para ela no menu:
```html
<a href="/sua-pagina.html">Minha Página</a>
```

**PASSO 4:** Faça o push:
```bash
git add .
git commit -m "Adicionar página: sua-pagina.html"
git push origin main
```

### 🗑️ Removendo uma Página

**PASSO 1:** Delete o arquivo local

**PASSO 2:** Remova o link do menu

**PASSO 3:** Faça o push:
```bash
git add .
git commit -m "Remover página: sua-pagina.html"
git push origin main
```

---

## 5. Admin/Painel vs Site Estático

### 🆚 Comparação

| Feature | Site Estático (Atual) | Com Painel Admin |
|---------|----------------------|-----------------|
| **Velocidade** | ⚡ Muito rápida | 🐌 Mais lenta |
| **Custo** | 💰 Gratuito | 💵 Pago (servidor + BD) |
| **Complexidade** | 📱 Simples | 🎯 Complexo |
| **Edição** | 📝 Git + Editor | 🖥️ Painel web |
| **Segurança** | ✅ Muito seguro | ⚠️ Requer cuidado |
| **Manutenção** | 🔧 Manual (Git) | 🤖 Automática |
| **Ideal para** | Conteúdo estável | Conteúdo dinâmico |

### 💡 RECOMENDAÇÃO

**Para Gestor Certo:** Mantenha o **site estático** porque:

✅ **Vantagens:**
- Site nunca sai do ar
- Extremamente rápido
- Sem riscos de segurança
- Deploy automático (GitHub Actions)
- Ideal para empresa profissional

❌ **Quando fazer um painel admin:**
- Se precisar editar diariamente
- Se múltiplas pessoas editarão
- Se tiver conteúdo muito dinâmico (blog, notícias)

### 🎯 SOLUÇÃO HÍBRIDA (Melhor opção)

Mantenha o site estático COMO ESTÁ, mas adicione:

**Opção A:** Blog com API
- Keep site estático
- Blog via serviço (Medium, Dev.to)
- Embed no site

**Opção B:** Painel mínimo (Recomendado)
- Criar painel admin simples
- Apenas para textos + links
- Não precisa de banco de dados complexo

**Opção C:** CMS Headless
- Usar Contentful, Strapi, ou similar
- Mantem site estático
- Admin painel robusto
- Custo: $10-50/mês

---

## 6. FAQ

### ❓ Como adicionar um novo serviço ao menu?

Procure a seção "NÚCLEO CONTÁBIL" e adicione um novo card:

```html
<div class="service-card">
  <h3>Novo Serviço</h3>
  <p>Descrição do serviço aqui</p>
</div>
```

### ❓ Como mudar o telefone de contato?

Procure por `Contatos` ou `WhatsApp` e mude o número:

```html
De: <a href="https://wa.me/5511999999999">Falar com Gestor Certo</a>
Para: <a href="https://wa.me/seu-numero-aqui">Falar com Gestor Certo</a>
```

### ❓ Como adicionar uma nova seção?

1. Copie uma seção existente
2. Mude o conteúdo
3. Cole em um novo local do arquivo
4. Salve e faça push

### ❓ E se eu cometer um erro?

Sem pânico! Você pode reverter:

```bash
git log --oneline          # Ver histórico
git revert CODIGO-COMMIT   # Reverter um commit
git push origin main       # Fazer push da reversão
```

### ❓ Posso editar pelo GitHub?

**SIM!** Você pode editar direto no navegador:

1. Vá para: https://github.com/contato819/gestorcerto-site
2. Clique no arquivo que quer editar
3. Clique no ícone de lápis (Edit)
4. Faça as alterações
5. Clique em "Commit changes"

**Pronto!** O site atualiza automaticamente!

### ❓ Como ver a versão anterior do site?

No GitHub, você pode ver:
- Todos os commits
- Quem fez cada alteração
- Quando foi feito
- O que foi mudado

Basta acessar: https://github.com/contato819/gestorcerto-site/commits/main

---

## 📞 Suporte Rápido

| Problema | Solução |
|----------|---------|
| Site não atualiza | Aguarde 2 minutos, limpe cache (Ctrl+Shift+Delete) |
| Erro ao fazer push | `git pull origin main` e tente novamente |
| Arquivo corrompido | Revert do GitHub ou `git checkout` |
| Link quebrado | Procure e corrija o caminho no `index.html` |

---

## ✨ PRÓXIMAS MELHORIAS SUGERIDAS

1. **Blog integrado** - Para publicar notícias
2. **Formulário de contato** - Para capturar leads
3. **Analytics** - Para medir visitantes
4. **SEO melhorado** - Meta tags personalizadas
5. **PWA** - Funcionar offline

---

**Última atualização:** 2026-06-08
**Versão:** 1.0
