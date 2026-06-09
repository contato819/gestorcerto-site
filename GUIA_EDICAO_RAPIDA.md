# 🚀 GUIA RÁPIDO - Editar o Site SEM GIT (Web Interface)

## ⚡ Para quem NÃO quer usar linha de comando!

Se você não gosta de usar Git Bash ou PowerShell, pode editar tudo **direto no navegador!**

---

## 📝 PASSO A PASSO: Editar no Navegador

### 1️⃣ Acesse o GitHub do seu projeto:
```
https://github.com/contato819/gestorcerto-site
```

### 2️⃣ Encontre o arquivo que quer editar:

Clique em **Code** → Procure o arquivo:
- `index.html` → Conteúdo e estrutura
- `assets/css/styles.css` → Cores e estilos
- `assets/js/main.js` → Funcionalidades

### 3️⃣ Clique no arquivo:

![Como clicar](explicação: você verá o conteúdo do arquivo)

### 4️⃣ Clique no ícone de lápis 🖊️:

Canto superior direito do arquivo → **Edit this file**

### 5️⃣ Faça suas edições:

Altere o texto que precisa

### 6️⃣ Clique em "Commit changes" (verde, abaixo):

Adicione uma mensagem descritiva:
```
O que mudou? Exemplo:
"Atualizar telefone de contato"
"Adicionar novo serviço"
"Corrigir link do Blog"
```

### 7️⃣ Clique em "Commit changes" novamente:

**PRONTO!** ✅ O site atualiza em 1-2 minutos!

---

## 🔗 Casos de Uso Comuns

### ✏️ CASO 1: Mudar Telefone/WhatsApp

**1. Acesse:** 
```
https://github.com/contato819/gestorcerto-site/blob/main/index.html
```

**2. Clique no lápis 🖊️**

**3. Procure por `wa.me/` (Ctrl+F)**

**4. Mude o número:**
```
De: https://wa.me/5511999999999
Para: https://wa.me/seu-novo-numero
```

**5. Role para baixo e faça Commit**

---

### 📧 CASO 2: Mudar Email de Contato

**1. Procure por `mailto:`**

**2. Mude o email:**
```
De: mailto:contato@gestorcerto.com.br
Para: mailto:seu-email@seu-dominio.com.br
```

**3. Commit changes**

---

### 🎨 CASO 3: Mudar Cor (Simples)

**1. Abra:** `assets/css/styles.css`

**2. Procure pela cor que quer mudar:**
```
Exemplo: #0B2A6B (azul escuro)
```

**3. Mude para uma cor nova:**
```
#FF0000 = Vermelho
#00FF00 = Verde
#0000FF = Azul
ou qualquer código HEX
```

**4. Commit**

---

### 🔗 CASO 4: Mudar Link do Menu "Acessos"

**1. Procure por:** `<a href="/acessos">Acessos</a>`

**2. Mude para:**
```html
<a href="https://app.gestorcerto.com.br" target="_blank">Acessos</a>
```

**3. Commit**

---

### 📱 CASO 5: Adicionar Novo Serviço

**1. Procure por:** `NÚCLEO CONTÁBIL` ou busque um serviço existente

**2. Copie um card de serviço:**
```html
<div class="service-card">
  <h3>Nome do Serviço</h3>
  <p>Descrição aqui</p>
</div>
```

**3. Cole logo após outro card e mude o conteúdo**

**4. Commit**

---

## ⚠️ Dicas Importantes

### ✅ O QUE VOCÊ PODE MUDAR:
- ✓ Textos e títulos
- ✓ Links e emails
- ✓ Cores e estilos básicos
- ✓ Imagens (mudando o caminho)
- ✓ Estrutura HTML

### ❌ O QUE NÃO MEXER (sem conhecimento):
- ✗ Sintaxe HTML (tags, símbolos)
- ✗ CSS complexo
- ✗ JavaScript
- ✗ Estrutura de pastas

### 📌 REGRA DE OURO:
Se não souber o que um código faz, **NÃO MUDE!**

---

## 🔄 Você Cometeu um Erro?

### Sem pânico! 🎯

**OPÇÃO 1: Desfazer a edição (rápido)**

Se você ainda não fez Commit:
- Clique em **Discard** ou feche a aba

**OPÇÃO 2: Reverter no GitHub (seguro)**

1. Vá para: `https://github.com/contato819/gestorcerto-site/commits/main`
2. Encontre o commit errado
3. Clique nele
4. Procure por um botão de "revert"
5. Confirme

**OPÇÃO 3: Editar novamente (fácil)**

Abra o arquivo de novo, corrija o erro, e faça Commit com mensagem:
```
"Corrigir erro anterior"
```

---

## 🎬 Visualizar Mudanças Antes de Commit

**Infelizmente,** a interface web do GitHub não tem preview em tempo real.

**SOLUÇÃO:** Depois de fazer Commit:
1. Aguarde 2 minutos
2. Acesse: https://gestorcerto.com.br
3. Limpe o cache (Ctrl+Shift+Delete) se não ver mudanças
4. Atualize a página (F5)

---

## 📊 Ver Histórico de Mudanças

Quer saber quem mudou o quê e quando?

**Vá para:** 
```
https://github.com/contato819/gestorcerto-site/commits/main
```

Você verá:
- 📅 Data e hora da mudança
- 👤 Quem fez
- 📝 Mensagem da mudança
- 🔗 Link para ver detalhes

---

## 🎓 Exemplos Práticos Completos

### Exemplo 1: Mudar Slogan

**Arquivo:** `index.html`

**Procure por:**
```html
Grupo Gestor ser a base para Tomada de Decisões é o nosso motor
```

**Mude para:**
```html
Soluções inteligentes para sua empresa crescer
```

**Commit message:**
```
Atualizar slogan do site
```

---

### Exemplo 2: Adicionar Novo Telefone

**Arquivo:** `index.html`

**Procure por:**
```html
<a href="https://wa.me/5511999999999">
```

**Se há vários números, mude o principal:**
```html
<a href="https://wa.me/5511988887777">
```

---

### Exemplo 3: Corrigir Link Quebrado

**Se um link leva a lugar nenhum:**

1. Procure por `href="`
2. Mude o link:
```html
De: <a href="https://blog-antigo.com">Blog</a>
Para: <a href="https://blog-novo.com">Blog</a>
```

---

## 🆘 Precisa de Ajuda?

### Se der erro de sintaxe:
1. GitHub avisa com uma linha vermelha
2. Verifique se não faltam aspas, parênteses ou tags

### Se o site não atualizar:
1. Aguarde 2 minutos completos
2. Limpe o cache do navegador
3. Tente em outro navegador

### Se estiver muito confuso:
**Simplesmente faça um Revert!** (desfaça a mudança)

---

## ✨ Dica de Ouro

**Editar via web é ótimo, MAS:**

Se você fizer **muitas mudanças frequentemente**, considere aprender Git!

É mais rápido e seguro. Use o `MANUAL_MANUTENCAO.md` para aprender.

---

**Última atualização:** 2026-06-08  
**Versão:** 1.0
