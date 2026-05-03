# Design Tokens

## Direcao Visual
Estilo premium, dark, moderno e energetico. A interface deve transmitir performance, disciplina, cuidado com saude e desejo de evoluir fisicamente.

## Paleta de Cores
- `--color-bg`: `#070809` - fundo principal.
- `--color-surface`: `#111315` - areas de apoio.
- `--color-surface-strong`: `#191c1f` - cards e blocos destacados.
- `--color-text`: `#f4f4f0` - texto principal.
- `--color-text-muted`: `#b7b8b2` - texto secundario.
- `--color-line`: `#2a2e32` - bordas discretas.
- `--color-gold`: `#d6a84f` - acento premium.
- `--color-gold-hover`: `#efc76a` - hover do acento.
- `--color-energy`: `#d84f35` - acento de energia, usar com moderacao.
- `--color-success`: `#35b779`.
- `--color-error`: `#ef5b5b`.
- `--color-focus`: `#f1c96b`.

## Tipografia
- Fonte recomendada para titulos: `Montserrat`, `Sora` ou similar geometrica.
- Fonte recomendada para texto: `Inter`, `Roboto` ou similar legivel.
- Titulos devem ser fortes, curtos e com boa hierarquia.
- Evitar texto muito pequeno em mobile.
- Letter spacing padrao: `0`.

## Espacamentos
- Escala base: `4px`.
- Espacamentos sugeridos: `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, `96`.
- Secoes devem ter respiro vertical consistente.
- Em mobile, reduzir espacamentos sem comprimir leitura.

## Botoes
- Primario: fundo gold, texto escuro, peso alto.
- Secundario: fundo transparente, borda discreta, texto claro.
- Altura minima: `44px`.
- Radius recomendado: ate `8px`.
- Estados devem ser claros para hover, focus, active e disabled.

## Cards
- Usar cards apenas para itens repetidos ou conteudos realmente agrupados, como planos e FAQ.
- Radius maximo recomendado: `8px`.
- Borda sutil com `--color-line`.
- Fundo com `--color-surface` ou `--color-surface-strong`.
- Evitar cards dentro de cards.

## Inputs
- Altura minima: `44px`.
- Fundo escuro contrastado.
- Borda visivel.
- Label sempre presente ou associada corretamente.
- Mensagens de erro proximas ao campo.

## Estados
- Hover: aumento sutil de contraste, cor ou borda.
- Focus: outline visivel com `--color-focus`.
- Loading: bloquear envio duplicado e indicar processamento.
- Error: usar `--color-error`, mensagem objetiva e campo identificado.
- Success: usar `--color-success`, confirmar envio/acao com texto claro.
- Disabled: reduzir contraste sem sumir com o elemento.

## Comportamento Mobile
- Priorizar leitura, CTA visivel e navegacao simples.
- Cards de planos em coluna unica.
- FAQ com areas de toque confortaveis.
- Imagens devem manter proporcao e nao cortar informacao importante.
- Evitar textos sobre imagens quando o contraste nao for garantido.

## Acessibilidade
- Contraste adequado em texto e botoes.
- Todos os inputs com labels.
- Navegacao por teclado funcional.
- Foco visivel.
- Textos alternativos em imagens relevantes.
- Nao depender apenas de cor para comunicar erro/sucesso.
- Headings em ordem logica.
