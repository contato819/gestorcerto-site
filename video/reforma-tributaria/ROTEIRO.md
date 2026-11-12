# Reforma Tributária para prestadores de serviço — roteiro

Vídeo: `reforma-tributaria-servicos.mp4` · 1920x1080 · 30 fps · 1min38s · faixa de áudio em silêncio (a narração entra por cima).

## Narração por cena

Ritmo de leitura: calmo, cerca de 2,5 palavras por segundo. Os tempos indicam onde cada trecho aparece no vídeo.

| Tempo | Cena | Narração |
|---|---|---|
| 0:00 – 0:08 | Abertura | A reforma tributária já começou. E, se você presta serviço, ela mexe direto no seu preço e na sua margem. Veja o que muda. |
| 0:08 – 0:21 | Cinco tributos viram um IVA dual | Hoje, quem presta serviço paga ISS para o município e PIS e Cofins para a União. No novo modelo, entram dois tributos: o IBS, de estados e municípios, e a CBS, federal. Os dois têm a mesma base, são cobrados por fora e dão crédito nas compras. |
| 0:21 – 0:36 | Cronograma | A mudança é gradual. 2026 é o ano de teste, com alíquotas simbólicas destacadas na nota. Em 2027, a CBS entra de vez e PIS e Cofins acabam. De 2029 a 2032, o ISS cai ano a ano enquanto o IBS sobe. Em 2033, ISS e ICMS deixam de existir. |
| 0:36 – 0:51 | Por que o setor de serviços sente mais | O ponto de atenção: a alíquota padrão estimada fica entre 26,5 e 28 por cento, bem acima do que o serviço paga hoje. Em troca, você desconta créditos do que compra. Só que o maior custo do serviço é a folha de pagamento, e folha não gera crédito. |
| 0:51 – 1:03 | Nem todo serviço paga a alíquota cheia | Mas há regras diferenciadas. Saúde e educação têm redução de 60 por cento. Profissões regulamentadas, como advocacia, contabilidade e engenharia, têm 30 por cento. E o Simples Nacional continua, com a opção de recolher IBS e CBS por fora. |
| 1:03 – 1:16 | Três mudanças práticas | No dia a dia, três coisas mudam. O imposto passa a ser do local do cliente. Com o split payment, o tributo é separado na hora do pagamento. E o seu cliente empresa passa a tomar crédito, o que muda a negociação de preço. |
| 1:16 – 1:29 | O que fazer agora | O que fazer agora? Simule a sua carga, revise preços e contratos longos, mapeie fornecedores e créditos, reavalie o regime tributário e ajuste a emissão de notas. |
| 1:29 – 1:38 | Encerramento | Quer saber o impacto na sua empresa? Fale com a Gestor Certo. O link está na descrição. |

## Sugestão para a publicação no YouTube

**Título:** Reforma Tributária: o que muda para prestadores de serviço (IBS e CBS)

**Descrição:**

> A reforma tributária já está em transição e o setor de serviços é um dos mais afetados. Neste vídeo você entende, em menos de 2 minutos: o que são IBS e CBS, o cronograma até 2033, por que a carga de quem presta serviço pode subir, quem tem alíquota reduzida e o que fazer agora para se preparar.
>
> 00:00 O que muda para quem presta serviço
> 00:08 ISS, PIS e Cofins dão lugar a IBS e CBS
> 00:21 Cronograma da transição
> 00:36 Por que serviços sentem mais
> 00:51 Reduções de alíquota e Simples Nacional
> 01:03 Três mudanças práticas
> 01:16 O que fazer agora
>
> Fale com a Gestor Certo: https://gestorcerto.com.br
> WhatsApp: https://wa.me/5511914040532
>
> Conteúdo informativo, com base na Emenda Constitucional 132/2023 e na Lei Complementar 214/2025. Alíquotas de referência são estimativas.

**Tags:** reforma tributária, IBS, CBS, prestador de serviço, ISS, IVA dual, split payment, Simples Nacional, contabilidade, Gestor Certo

## Conferir antes de publicar

Estes números foram escritos de memória, sem consulta à legislação atualizada. Vale a revisão de um contador da equipe:

- Alíquotas de teste de 2026 (CBS 0,9% e IBS 0,1%).
- Faixa da alíquota padrão estimada (26,5% a 28%).
- Carga atual do Lucro Presumido em serviços (5,65% a 8,65%: ISS de 2% a 5% mais PIS/Cofins de 3,65%).
- Reduções de 60% (saúde e educação) e 30% (profissões regulamentadas).
- Datas do cronograma (2027, 2029 a 2032, 2033).

A barra de composição de custos (folha, insumos, outros) é ilustrativa e está identificada assim na tela.

## Como editar e gerar de novo

- Textos e tempos ficam em `index.html`. Cada cena tem `data-start` e `data-end` em segundos, e cada elemento entra no tempo de `data-at`.
- Abrir `index.html` no navegador toca a prévia em tempo real (`?t=36` começa no segundo 36).
- `node render.js` gera o MP4 de novo. Precisa de Node, Playwright e ffmpeg.
- `node render.js --still 40 quadro.png` salva um único quadro para conferência.
