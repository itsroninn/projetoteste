# Auditoria de Seguranca

Data: 2026-05-03
Escopo: landing page estatica da OLYMPO Fitness, formulario Netlify Forms, arquivos publicados em `public/`, configuracao Netlify, `.gitignore` e documentacao de infra.

## Resumo
O projeto nao possui backend proprio, banco de dados, credenciais ou chaves de API no frontend. O formulario coleta apenas nome, telefone/WhatsApp, objetivo e mensagem opcional, conforme o contrato do MVP.

Foram aplicadas correcoes preventivas em validacao do formulario, limites de campos, honeypot, headers de seguranca e `.gitignore`.

## Achados

### Medio - Numero de WhatsApp placeholder
Arquivo: `public/index.html`

O link `https://wa.me/5500000000000` e um placeholder. Nao e dado sensivel, mas pode quebrar o canal alternativo de contato em producao e prejudicar o fluxo quando o envio do formulario falhar.

Correcao recomendada antes do deploy: substituir pelo numero oficial da OLYMPO em formato internacional, sem espacos, parenteses ou hifen.

### Baixo - Headers de seguranca incompletos
Arquivo: `netlify.toml`

A configuracao inicial ja tinha `X-Content-Type-Options`, `X-Frame-Options` e `Referrer-Policy`, mas faltavam CSP, HSTS, `Permissions-Policy` e `Cross-Origin-Opener-Policy`.

Correcao aplicada: adicionados headers globais com CSP restritiva compativel com HTML/CSS/JS locais, Google Fonts, envio Netlify Forms e bloqueio de recursos sensiveis nao usados.

### Baixo - Limites HTML do formulario incompletos
Arquivo: `public/index.html`

O contrato previa limites para nome e telefone, mas o HTML ainda nao aplicava todos esses limites.

Correcao aplicada: `phone` recebeu `minlength="10"` e o honeypot recebeu `tabindex="-1"` e `autocomplete="off"`. O campo `name` ja estava com `maxlength="80"` no estado atual do arquivo.

### Baixo - Validacao de telefone aceitava numeros longos demais
Arquivo: `public/script.js`

A validacao JavaScript rejeitava telefones com menos de 10 digitos, mas nao limitava o maximo definido no contrato.

Correcao aplicada: telefone agora exige entre 10 e 13 digitos apos remover mascara, espacos, parenteses e hifens.

### Baixo - `.gitignore` podia deixar passar artefatos sensiveis comuns
Arquivo: `.gitignore`

O arquivo ja ignorava `.env`, logs, dependencias e `.netlify/`, mas nao cobria chaves/certificados, pastas comuns de segredos e copias acidentais do projeto.

Correcao aplicada: adicionados padroes para chaves/certificados, `secrets/`, `private/`, `coverage/`, swap files e copia aninhada `WEBSITE PROJETO TESTE/`.

## Verificacoes

- Segredos: busca por termos como senha, token, secret, API key, bearer, chaves privadas e padroes comuns nao encontrou credenciais reais no escopo auditado.
- Formulario: compativel com Netlify Forms usando `name="lead-olympo"`, `method="post"`, `data-netlify="true"`, `netlify-honeypot="bot-field"` e `form-name`.
- Dados coletados: limitados a lead comercial; nao ha solicitacao de CPF, endereco, senha, dados de pagamento ou dados de saude detalhados.
- Erro/sucesso: script exibe mensagens de validacao, loading, sucesso e erro; em falha, orienta WhatsApp como alternativa.
- Links externos: o link externo identificado abre em nova aba com `rel="noopener noreferrer"`.
- Exposicao de arquivos: Netlify publica apenas `public/`, conforme `netlify.toml`; documentos, specs, infra e arquivos Git nao devem ser servidos no deploy normal.

## Checklist Antes do Deploy

- [ ] Substituir o WhatsApp placeholder pelo numero oficial.
- [ ] Fazer um envio real no ambiente Netlify e confirmar chegada do lead no painel Forms.
- [ ] Configurar notificacoes do Netlify Forms para o email operacional correto, sem registrar o email em arquivos sensiveis se nao for publico.
- [ ] Confirmar que o dominio final usa HTTPS antes de manter HSTS ativo em producao.
- [ ] Conferir se a pasta publicada continua sendo apenas `public/`.
