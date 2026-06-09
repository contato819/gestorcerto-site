# ✅ CHECKLIST DE MANUTENÇÃO DO SITE

## 📅 Frequência Recomendada

### ⚡ SEMANAL (5 minutos)
- [ ] Verificar se o site está online: https://gestorcerto.com.br
- [ ] Testar links principais (Contatos, WhatsApp, Acessos)
- [ ] Ver se há erros no console (F12 → Console)

### 📆 MENSAL (15 minutos)
- [ ] Revisar conteúdo dos textos
- [ ] Atualizar telefones se mudaram
- [ ] Verificar se imagens estão carregando
- [ ] Testar em dispositivos móveis
- [ ] Ver analytics (se tiver)

### 🔄 TRIMESTRAL (30 minutos)
- [ ] Fazer backup dos arquivos
- [ ] Revisar estrutura de pastas
- [ ] Atualizar links quebrados
- [ ] Revisar histórico de commits (GitHub)
- [ ] Limpar arquivos desnecessários

---

## 🚨 PROBLEMAS COMUNS E SOLUÇÕES

### ❌ Site não aparece / Erro 404

**Possível causa:** Deploy falhou

**Solução:**
1. Vá para: https://github.com/contato819/gestorcerto-site/actions
2. Procure o último commit
3. Veja se tem ✅ ou ❌
4. Se ❌, clique e veja o erro
5. Se ✅, aguarde mais 2 minutos e limpe cache

---

### ❌ Site aparece desatualizado

**Possível causa:** Cache do navegador

**Solução:**
1. Pressione: **Ctrl + Shift + Delete**
2. Selecione tudo
3. Clique em "Limpar dados de navegação"
4. Atualize a página: **F5** ou **Ctrl + R**

Se ainda não funcionar:
1. Abra em navegador diferente (Chrome, Firefox, Edge)
2. Ou use navegação anônima (Ctrl + Shift + N)

---

### ❌ Link está quebrado

**Solução:**
1. Edite o arquivo index.html
2. Procure o link quebrado (Ctrl+F)
3. Corrija o endereço
4. Commit changes
5. Aguarde 2 minutos

---

### ❌ Imagem não aparece

**Possível causa:** Caminho errado ou arquivo deletado

**Solução:**
1. Verifique se a imagem existe em `assets/img/`
2. Verifique o caminho no `index.html`
3. Deve ser: `assets/img/nome-da-imagem.png`
4. Se não existir, adicione a imagem novamente

---

### ❌ Mudança não apareceu no site

**Possível causa:** Commit não foi feito

**Solução:**
1. Vá para: https://github.com/contato819/gestorcerto-site/commits/main
2. Procure seu commit recente
3. Se não estiver lá, você esqueceu de fazer Commit!
4. Abra o arquivo novamente e faça Commit

---

## 🔍 VERIFICAÇÃO TÉCNICA (Mensal)

### Teste de Velocidade

**Ferramenta:** Google PageSpeed Insights
```
https://pagespeed.web.dev/
```

**Insira:** `https://gestorcerto.com.br`

**Esperado:** Score > 80

---

### Teste de Compatibilidade

Teste em diferentes navegadores:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

Teste em diferentes dispositivos:
- [ ] Celular (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px)

---

### Teste de Links

Use ferramenta online ou manual:
1. [ ] Todos os links do menu funcionam?
2. [ ] Links externos abrem corretamente?
3. [ ] WhatsApp leva para conversa?
4. [ ] Email funciona?

---

## 📊 MONITORAMENTO

### Acompanhar Visitantes

Se tiver Google Analytics:
1. Quantos visitantes por dia?
2. De onde vêm?
3. Qual página mais visitada?
4. Quanto tempo fica no site?

---

### Acompanhar Commits

No GitHub, você pode ver:
```
https://github.com/contato819/gestorcerto-site/insights/commit-activity
```

Mostra:
- Quando edições foram feitas
- Quantas mudanças
- Quem fez

---

## 📋 TEMPLATE DE RELATÓRIO MENSAL

```
=== RELATÓRIO DE MANUTENÇÃO DO SITE ===
Mês: Junho/2026

✅ Verificações:
- [ ] Site online: SIM
- [ ] Links funcionando: SIM
- [ ] Imagens carregando: SIM
- [ ] Mobile responsivo: SIM

📈 Estatísticas:
- Visitantes: 150
- Páginas mais vistas: Home
- Tempo médio: 2min30s

🔄 Atualizações feitas:
- Mudou telefone
- Adicionou novo serviço
- Corrigiu 2 links

⚠️ Problemas encontrados:
- Nenhum

📅 Próximas ações:
- Revisar conteúdo do Blog
- Adicionar nova página de dúvidas

Atualizado por: [SEU NOME]
Data: 08/06/2026
```

---

## 🎯 MANUTENÇÃO PREVENTIVA

### Backup Mensal

**Para fazer backup seguro:**

1. **Via GitHub (automático):**
   - GitHub guarda histórico completo
   - Você pode sempre voltar a uma versão anterior

2. **Download manual:**
   ```
   https://github.com/contato819/gestorcerto-site
   → Clique em Code → Download ZIP
   ```

### Atualizar Dependências

Este site não tem dependências (não usa frameworks), então não precisa de updates!

✨ **Vantagem de site estático:** Zero vulnerabilidades!

---

## 🚀 OTIMIZAÇÕES MENSAIS

### Revisar Textos
- [ ] Ortografia correta?
- [ ] Links atualizados?
- [ ] Telefones corretos?
- [ ] Endereço correto?

### Revisar Imagens
- [ ] Logotipos ainda válidos?
- [ ] Imagens com boa qualidade?
- [ ] Sem imagens quebradas?

### Revisar Performance
- [ ] Site carrega em menos de 3 segundos?
- [ ] Funciona offline (PWA)?
- [ ] Mobile fica responsivo?

---

## 📞 QUANDO CHAMAR SUPORTE

Se você não conseguir resolver:

1. **Problema simples (texto, link):**
   - Tente seguir os guias deste documento

2. **Problema técnico (erro no console, deploy):**
   - Consulte o `MANUAL_MANUTENCAO.md`

3. **Problema complexo (alterar estrutura):**
   - Precisará de alguém com conhecimento técnico
   - Considere contratar um desenvolvedor

---

## 📌 RESPOSTAS RÁPIDAS

| Pergunta | Resposta |
|----------|----------|
| O site pode sair do ar? | Praticamente não, está em servidor robusto |
| Quanto custa manter? | $0 (zero custo!) |
| Preciso renovar domínio? | Sim, anualmente em Hostinger |
| Quantas pessoas podem editar? | Ilimitado (via GitHub) |
| O histórico fica salvo? | Sim, para sempre no GitHub |
| Posso desfazer uma mudança? | Sim, via GitHub Revert |
| Precisa de banco de dados? | Não, tudo estático |
| Precisa de certificado SSL? | Sim (já está incluído) |

---

## 🎓 DOCUMENTAÇÃO DE REFERÊNCIA

| Documento | Para quem? | O que é? |
|-----------|-----------|---------|
| MANUAL_MANUTENCAO.md | Técnicos | Guia completo |
| GUIA_EDICAO_RAPIDA.md | Não-técnicos | Como editar fácil |
| CHECKLIST_MANUTENCAO.md | Todos | Este arquivo |

---

**Última atualização:** 2026-06-08  
**Versão:** 1.0

💡 **Dica:** Salve este documento e revise mensalmente!
