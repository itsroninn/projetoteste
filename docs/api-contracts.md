# Contratos de API e Formularios

## Decisao Inicial
O MVP nao tera backend proprio. O formulario devera ser estatico, preferencialmente usando Netlify Forms. Alternativas como Formspree podem ser consideradas se houver exigencia operacional.

## Formulario Estatico
Nome sugerido do formulario: `lead-olympo`.

Finalidade:
Capturar interesse de visitantes que desejam conhecer planos ou falar com a academia.

## Campos Enviados
- `name`
  - Obrigatorio: sim.
  - Tipo: texto.
  - Validacao: minimo 2 caracteres.
- `phone`
  - Obrigatorio: sim.
  - Tipo: telefone/WhatsApp.
  - Validacao: deve conter numero plausivel.
- `goal`
  - Obrigatorio: recomendado.
  - Tipo: selecao ou texto curto.
  - Exemplos: saude, emagrecimento, hipertrofia, condicionamento, outro.
- `message`
  - Obrigatorio: nao.
  - Tipo: texto.
  - Validacao: limitar tamanho para evitar abuso.

## Respostas Esperadas
Como o MVP usa formulario estatico, nao ha endpoint proprio com JSON.

Comportamentos esperados no frontend:
- Sucesso: mostrar confirmacao de envio e orientar proximo passo.
- Erro: informar falha e sugerir contato por WhatsApp.
- Loading: impedir envio duplicado.

## Erros
- Campo obrigatorio vazio.
- Telefone invalido ou incompleto.
- Falha de envio do provedor.
- Conexao indisponivel.

## Destino dos Dados
No Netlify Forms, os dados ficam disponiveis no painel da Netlify e podem ser encaminhados por notificacao configurada no proprio painel.

## Regras Futuras Para Backend
Se um backend for criado:
- Registrar endpoints aqui antes de implementar.
- Definir payloads e respostas.
- Nunca expor credenciais no frontend.
- Usar validacao no cliente e no servidor.
- Documentar variaveis de ambiente em `infra/README.md`, sem valores reais.
