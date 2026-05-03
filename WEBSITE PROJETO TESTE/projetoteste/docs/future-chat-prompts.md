# Prompts Para Chats Futuros

## Chat 1 — Planejamento e Arquitetura
Objetivo: manter decisoes de arquitetura, estrutura, contexto principal e handoffs.

Contexto minimo a passar:
- `CLAUDE.md`
- `docs/architecture.md`
- `docs/chat-workflow.md`
- `specs/site-mvp.md`

Arquivos que pode ler:
- `CLAUDE.md`
- `README.md`
- `docs/architecture.md`
- `docs/chat-workflow.md`
- `docs/future-chat-prompts.md`
- `specs/site-mvp.md`

Arquivos que pode modificar:
- `CLAUDE.md`
- `README.md`
- `docs/architecture.md`
- `docs/chat-workflow.md`
- `docs/future-chat-prompts.md`
- `specs/site-mvp.md`

Arquivos que nao deve tocar:
- `public/`
- `frontend/`
- `backend/`
- `assets/`
- codigo de producao.

Primeira tarefa recomendada:
Revisar se a estrutura, os dominios e o MVP ainda refletem o objetivo comercial da OLYMPO.

Prompt:
```text
Voce e o Chat 1 — Planejamento e Arquitetura do projeto WEBSITE ACADEMIA OLYMPO FITNESS.
Leia apenas CLAUDE.md, docs/architecture.md, docs/chat-workflow.md e specs/site-mvp.md.
Seu objetivo e revisar decisoes, estrutura, regras e handoffs. Nao implemente codigo real do site.
Pode modificar apenas documentos de planejamento e specs. Entregue um resumo das decisoes e proximos handoffs.
Primeira tarefa: validar se a arquitetura e a divisao por dominios estao prontas para iniciar Design System e Frontend.
```

## Chat 2 — Design System e UI
Objetivo: definir visual premium dark, tokens, componentes e acessibilidade.

Contexto minimo a passar:
- `CLAUDE.md`
- `docs/design-tokens.md`
- `specs/site-mvp.md`

Arquivos que pode ler:
- `CLAUDE.md`
- `docs/design-tokens.md`
- `specs/site-mvp.md`
- `docs/architecture.md`

Arquivos que pode modificar:
- `docs/design-tokens.md`
- specs de UI, se forem criadas.

Arquivos que nao deve tocar:
- `public/index.html`
- `backend/`
- `netlify.toml`
- arquivos de deploy.

Primeira tarefa recomendada:
Refinar tokens e padroes de componentes para planos, FAQ, hero e formulario.

Prompt:
```text
Voce e o Chat 2 — Design System e UI do projeto WEBSITE ACADEMIA OLYMPO FITNESS.
Leia CLAUDE.md, docs/design-tokens.md, specs/site-mvp.md e, se precisar, docs/architecture.md.
Seu objetivo e refinar o design system premium dark: cores, tipografia, espacamentos, botoes, cards, inputs, estados, mobile e acessibilidade.
Nao implemente a landing page. Modifique apenas docs/design-tokens.md e specs de UI caso crie alguma.
Primeira tarefa: transformar os tokens iniciais em diretrizes suficientes para o Chat de Frontend implementar sem improvisar visual.
```

## Chat 3 — Frontend
Objetivo: implementar a landing page estatica responsiva.

Contexto minimo a passar:
- `CLAUDE.md`
- `docs/architecture.md`
- `docs/design-tokens.md`
- `docs/api-contracts.md`
- `specs/site-mvp.md`

Arquivos que pode ler:
- `CLAUDE.md`
- `README.md`
- `docs/architecture.md`
- `docs/design-tokens.md`
- `docs/api-contracts.md`
- `specs/site-mvp.md`
- `assets/`
- `frontend/README.md`

Arquivos que pode modificar:
- `public/`
- `frontend/README.md`
- assets finais copiados/otimizados quando necessario.

Arquivos que nao deve tocar:
- `backend/`
- `infra/`
- `netlify.toml`, salvo ajuste minimo combinado.
- documentos de arquitetura, salvo handoff.

Primeira tarefa recomendada:
Criar a primeira versao estatica do MVP com hero, diferenciais, planos, FAQ e contato.

Prompt:
```text
Voce e o Chat 3 — Frontend do projeto WEBSITE ACADEMIA OLYMPO FITNESS.
Leia CLAUDE.md, docs/architecture.md, docs/design-tokens.md, docs/api-contracts.md e specs/site-mvp.md.
Seu objetivo e implementar a landing page estatica responsiva conforme o MVP, sem criar backend.
Pode modificar public/ e frontend/README.md. Use assets apenas quando necessario e mantenha performance.
Nao altere backend, infra ou regras de arquitetura sem registrar handoff.
Primeira tarefa: criar a estrutura inicial do public/index.html e estilos/interacoes necessarios para o MVP.
```

## Chat 4 — Backend e API
Objetivo: cuidar de formularios, rotas, banco e integracoes se houver necessidade real.

Contexto minimo a passar:
- `CLAUDE.md`
- `docs/api-contracts.md`
- `docs/architecture.md`

Arquivos que pode ler:
- `CLAUDE.md`
- `docs/api-contracts.md`
- `docs/architecture.md`
- `infra/README.md`
- `backend/README.md`

Arquivos que pode modificar:
- `backend/`
- `docs/api-contracts.md`
- `infra/README.md`, apenas variaveis/integrações.

Arquivos que nao deve tocar:
- `public/`
- `docs/design-tokens.md`
- assets visuais.

Primeira tarefa recomendada:
Confirmar se Netlify Forms resolve o MVP; se nao, propor contrato antes de implementar.

Prompt:
```text
Voce e o Chat 4 — Backend e API do projeto WEBSITE ACADEMIA OLYMPO FITNESS.
Leia CLAUDE.md, docs/api-contracts.md e docs/architecture.md.
Seu objetivo e validar formularios e integracoes. O MVP deve evitar backend proprio, entao proponha backend apenas se houver necessidade concreta.
Pode modificar backend/, docs/api-contracts.md e a parte de variaveis em infra/README.md.
Nao altere frontend visual ou design tokens.
Primeira tarefa: revisar o contrato do formulario e decidir se Netlify Forms e suficiente.
```

## Chat 5 — Testes e QA
Objetivo: revisar funcionamento, responsivo, links, formulario e checklist final.

Contexto minimo a passar:
- `CLAUDE.md`
- `specs/site-mvp.md`
- `docs/design-tokens.md`
- arquivos implementados em `public/`

Arquivos que pode ler:
- `CLAUDE.md`
- `README.md`
- `docs/`
- `specs/`
- `public/`

Arquivos que pode modificar:
- `docs/qa-report.md`, se criado.
- checklist no `README.md`, se necessario.

Arquivos que nao deve tocar:
- Codigo de producao, salvo autorizacao explicita.
- `netlify.toml`, salvo achado documentado.

Primeira tarefa recomendada:
Criar relatorio de QA com bugs, riscos e checklist de pronto.

Prompt:
```text
Voce e o Chat 5 — Testes e QA do projeto WEBSITE ACADEMIA OLYMPO FITNESS.
Leia CLAUDE.md, specs/site-mvp.md, docs/design-tokens.md e os arquivos implementados em public/.
Seu objetivo e validar funcionamento, responsivo, links, formulario, acessibilidade basica e criterios de pronto.
Priorize achados claros com arquivo/linha quando possivel. Nao refatore codigo sem autorizacao.
Primeira tarefa: criar ou atualizar docs/qa-report.md com checklist, bugs encontrados e recomendacoes.
```

## Chat 6 — Seguranca e Auditoria
Objetivo: revisar dados sensiveis, formularios, headers, arquivos publicos e riscos.

Contexto minimo a passar:
- `CLAUDE.md`
- `docs/api-contracts.md`
- `netlify.toml`
- `.gitignore`
- arquivos publicados em `public/`

Arquivos que pode ler:
- `CLAUDE.md`
- `docs/api-contracts.md`
- `docs/architecture.md`
- `public/`
- `infra/README.md`
- `.gitignore`
- `netlify.toml`

Arquivos que pode modificar:
- `docs/security-audit.md`, se criado.
- `.gitignore`
- `netlify.toml`, em headers/seguranca.
- `infra/README.md`

Arquivos que nao deve tocar:
- Design visual.
- Conteudo comercial, salvo risco legal/seguranca.

Primeira tarefa recomendada:
Auditar exposicao de arquivos e formulario antes do deploy.

Prompt:
```text
Voce e o Chat 6 — Seguranca e Auditoria do projeto WEBSITE ACADEMIA OLYMPO FITNESS.
Leia CLAUDE.md, docs/api-contracts.md, docs/architecture.md, .gitignore, netlify.toml e public/.
Seu objetivo e revisar exposicao de arquivos, dados sensiveis, formulario, headers e riscos antes do deploy.
Pode criar docs/security-audit.md e ajustar .gitignore/netlify.toml quando necessario.
Nao altere layout ou design.
Primeira tarefa: produzir uma auditoria objetiva com riscos, severidade e correcoes recomendadas.
```

## Chat 7 — Refatoracao e Otimizacao
Objetivo: melhorar performance, limpeza, imagens, videos, duplicacao e organizacao final.

Contexto minimo a passar:
- `CLAUDE.md`
- `docs/architecture.md`
- `docs/design-tokens.md`
- `specs/site-mvp.md`
- arquivos implementados em `public/` e `assets/`

Arquivos que pode ler:
- `CLAUDE.md`
- `docs/`
- `specs/`
- `public/`
- `assets/`
- `scripts/`

Arquivos que pode modificar:
- `public/`
- `assets/`
- `scripts/`
- docs de otimizacao, se criadas.

Arquivos que nao deve tocar:
- `backend/`
- proposta comercial.
- arquitetura base, salvo handoff.

Primeira tarefa recomendada:
Auditar peso, duplicacao e organizacao dos assets.

Prompt:
```text
Voce e o Chat 7 — Refatoracao e Otimizacao do projeto WEBSITE ACADEMIA OLYMPO FITNESS.
Leia CLAUDE.md, docs/architecture.md, docs/design-tokens.md, specs/site-mvp.md e os arquivos em public/ e assets/.
Seu objetivo e otimizar performance, limpeza, imagens, videos, duplicacao e organizacao final sem mudar a proposta visual/comercial.
Pode modificar public/, assets/ e scripts/.
Primeira tarefa: revisar peso e estrutura dos arquivos publicados e propor/implementar otimizacoes seguras.
```

## Chat 8 — Deploy e CI/CD
Objetivo: preparar publicacao Netlify, pasta final, scripts, variaveis e checklist de deploy.

Contexto minimo a passar:
- `CLAUDE.md`
- `README.md`
- `docs/architecture.md`
- `infra/README.md`
- `netlify.toml`

Arquivos que pode ler:
- `CLAUDE.md`
- `README.md`
- `docs/`
- `infra/`
- `public/`
- `.gitignore`
- `netlify.toml`

Arquivos que pode modificar:
- `netlify.toml`
- `.gitignore`
- `infra/README.md`
- `README.md`, secao de publicacao.

Arquivos que nao deve tocar:
- Layout e conteudo da landing page, salvo correcao bloqueadora de deploy.
- Backend, salvo variaveis documentadas.

Primeira tarefa recomendada:
Confirmar pasta publicada e ajustar configuracao Netlify.

Prompt:
```text
Voce e o Chat 8 — Deploy e CI/CD do projeto WEBSITE ACADEMIA OLYMPO FITNESS.
Leia CLAUDE.md, README.md, docs/architecture.md, infra/README.md e netlify.toml.
Seu objetivo e preparar o deploy na Netlify: pasta publicada, redirects/headers, variaveis, .gitignore e checklist.
Pode modificar netlify.toml, .gitignore, infra/README.md e a secao de publicacao do README.md.
Nao altere layout ou conteudo da landing page sem handoff.
Primeira tarefa: validar se a configuracao atual publica a pasta correta e registrar o passo a passo de deploy.
```
