# Contratos de API e Formularios

## Decisao Inicial
O MVP nao tera backend proprio. O formulario de contato deve usar Netlify Forms, pois a necessidade atual e apenas capturar leads de uma landing page estatica e enviar os dados para o painel/notificacoes da Netlify.

Backend proprio so deve ser considerado se surgir uma necessidade concreta que Netlify Forms nao cubra, como integracao com CRM, automacao com regras de negocio, area administrativa, persistencia propria, autenticacao, auditoria avancada ou API consumida por outros sistemas.

## Formulario Estatico
Nome do formulario: `lead-olympo`.

Finalidade:
Capturar interesse de visitantes que desejam conhecer planos ou falar com a academia.

Implementacao esperada no HTML:
- O formulario deve estar em `public/index.html`, quando a landing page existir.
- Usar `name="lead-olympo"`, `method="POST"`, `data-netlify="true"` e `netlify-honeypot="bot-field"`.
- Incluir `<input type="hidden" name="form-name" value="lead-olympo">`.
- Incluir um campo honeypot oculto com `name="bot-field"`.
- Nao definir `action` para backend proprio. Se houver pagina de obrigado no futuro, documentar antes de usar `action="/obrigado.html"`.
- Nao enviar dados sensiveis alem dos campos listados neste contrato.

## Campos Enviados
- `name`
  - Obrigatorio: sim.
  - Tipo: texto.
  - HTML esperado: `type="text"`, `required`, `minlength="2"`, `maxlength="80"`, `autocomplete="name"`.
  - Validacao: minimo 2 caracteres e sem aceitar apenas espacos.
- `phone`
  - Obrigatorio: sim.
  - Tipo: telefone/WhatsApp.
  - HTML esperado: `type="tel"`, `required`, `minlength="10"`, `maxlength="20"`, `autocomplete="tel"`, `inputmode="tel"`.
  - Validacao: deve conter numero plausivel, aceitando mascara, espacos, parenteses e hifen; apos remover caracteres nao numericos, deve restar entre 10 e 13 digitos.
- `goal`
  - Obrigatorio: sim.
  - Tipo: selecao.
  - HTML esperado: `select` com `required`.
  - Opcoes recomendadas: `saude`, `emagrecimento`, `hipertrofia`, `condicionamento`, `outro`.
- `message`
  - Obrigatorio: nao.
  - Tipo: texto.
  - HTML esperado: `textarea` com `maxlength="500"`.
  - Validacao: limitar tamanho para evitar abuso.

Campos tecnicos:
- `form-name`: obrigatorio para Netlify Forms quando houver envio via JavaScript.
- `bot-field`: honeypot anti-spam, deve ficar oculto para usuarios reais.

## Respostas Esperadas
Como o MVP usa formulario estatico, nao ha endpoint proprio com JSON.

Comportamentos esperados no frontend:
- Sucesso: mostrar confirmacao clara de envio, limpar o formulario e orientar que a equipe entrara em contato.
- Erro de validacao: destacar campos invalidos e explicar a correcao necessaria sem apagar os dados ja digitados.
- Erro de provedor/conexao: informar falha no envio e sugerir contato por WhatsApp como alternativa.
- Loading: desabilitar o botao de envio e impedir envio duplicado enquanto a requisicao estiver em andamento.

Envio com JavaScript:
- Pode usar `fetch("/")` com `Content-Type: application/x-www-form-urlencoded`, incluindo `form-name=lead-olympo`.
- Considerar sucesso apenas para resposta HTTP `2xx`.
- Em caso de erro, restaurar o botao e manter os dados preenchidos.

Envio sem JavaScript:
- O formulario deve continuar enviavel pelo fluxo padrao da Netlify, usando `method="POST"` e os atributos Netlify Forms no HTML.

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
