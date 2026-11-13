# Reforma Tributária — versões comercial e desenho animado

Os dois vídeos estão sem som. As narrações abaixo são para gravar por cima; cada trecho segue o tempo da cena.

## Desenho animado (`reforma-tributaria-desenho.mp4`, 1min05s)

Personagens: Ana (prestadora de serviço, desenhada em vetor) e o Gestorzinho (mascote enviado pelo Jefferson, em `gestorzinho.png`).

| Tempo | Cena | Narração |
|---|---|---|
| 0:00 – 0:09 | A Ana e o estúdio | Esta é a Ana. Ela tem um estúdio de design e vive de prestar serviço. Todo mês, paga ISS, PIS e Cofins sobre o que fatura. |
| 0:09 – 0:20 | Chega a reforma | Até que chegou a reforma tributária. Os tributos que a Ana conhecia dão lugar a dois novos: o IBS e a CBS. |
| 0:20 – 0:31 | A estrada até 2033 | A mudança vem aos poucos. Começa em 2026, com o ano de teste, e só termina em 2033. |
| 0:31 – 0:43 | A balança | A alíquota nova é bem maior. Em troca, a Ana desconta créditos do que compra. Só que o maior custo dela é a equipe, e folha de pagamento não gera crédito. |
| 0:43 – 0:55 | O Gestorzinho | Foi aí que a Ana chamou o Gestorzinho, contador do Grupo Gestor. Juntos, eles simularam a carga, revisaram os preços e escolheram o melhor regime. |
| 0:55 – 1:05 | Final | Quer fazer como a Ana? Fale com o Grupo Gestor. |

## Comercial (`../reforma-tributaria-comercial/reforma-tributaria-comercial.mp4`, 34s)

| Tempo | Tela | Locução |
|---|---|---|
| 0:00 – 0:03 | A reforma tributária já começou | Você presta serviço? A reforma tributária já começou. |
| 0:03 – 0:08 | ISS, PIS, Cofins riscados; IBS + CBS | ISS, PIS e Cofins dão lugar a IBS e CBS. |
| 0:08 – 0:13 | Contador sobe até 28% | A alíquota padrão é estimada em até 28 por cento. |
| 0:13 – 0:18 | Crédito nas compras? Sim. Na folha? Não. | Crédito nas compras, sim. Na folha de pagamento, não. |
| 0:18 – 0:21 | Sua margem aguenta? | Sua margem aguenta? |
| 0:21 – 0:27 | Três cartões | O Grupo Gestor faz a conta com você: simula a carga, revisa os preços e define o melhor regime. |
| 0:27 – 0:34 | Foto, logo e contatos | Fale com um especialista. |

## Conferir antes de publicar

Os números são os mesmos do vídeo educativo e foram escritos de memória: alíquota padrão estimada em até 28%, carga atual de 5,65% a 8,65% no Lucro Presumido, cronograma de 2026 a 2033. Vale a revisão do contador.

## Como gerar de novo

Em cada pasta: `node render.js` (Node, Playwright e ffmpeg). Textos e tempos ficam no `index.html` da pasta.
