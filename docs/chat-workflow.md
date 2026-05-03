# Workflow por Chats

## Regra Geral
Cada chat trabalha por dominio de responsabilidade, nao por fase temporal. O chat deve ler apenas o contexto minimo necessario, modificar somente arquivos permitidos e entregar um resumo claro do que mudou.

## Chat 1 — Planejamento e Arquitetura
Responsavel por decisoes, estrutura, documentos base e `CLAUDE.md`.

Pode modificar:
- `CLAUDE.md`
- `README.md`
- `docs/architecture.md`
- `docs/chat-workflow.md`
- `docs/future-chat-prompts.md`
- `specs/site-mvp.md`

Nao escreve codigo real de site.

## Chat 2 — Design System e UI
Responsavel por tokens, componentes visuais, padroes de acessibilidade e estetica.

Pode modificar:
- `docs/design-tokens.md`
- specs relacionadas a UI, se criadas.

Nao deve implementar `index.html` completo.

## Chat 3 — Frontend
Responsavel por `index.html`, paginas, secoes, responsivo, animacoes e interacoes visuais.

Pode modificar:
- `public/`
- `frontend/`
- assets publicados quando necessario.

Deve seguir:
- `CLAUDE.md`
- `docs/architecture.md`
- `docs/design-tokens.md`
- `specs/site-mvp.md`

## Chat 4 — Backend e API
Responsavel por rotas, formularios, banco, integracoes e contratos de API. Usar somente se o projeto tiver backend ou necessidade real de integracao.

Pode modificar:
- `backend/`
- `docs/api-contracts.md`
- documentacao de variaveis em `infra/README.md`

Nao deve mexer no visual da landing page.

## Chat 5 — Testes e QA
Responsavel por revisar funcionamento, mobile, links, formulario, bugs visuais e checklist final.

Pode modificar:
- `docs/qa-report.md`, se criado.
- Pequenos ajustes documentais de checklist.

Correcoes de codigo devem ser registradas como achados ou feitas apenas se autorizadas.

## Chat 6 — Seguranca e Auditoria
Responsavel por revisar exposicao de arquivos, dados sensiveis, formularios, headers e riscos antes do deploy.

Pode modificar:
- `docs/security-audit.md`, se criado.
- `.gitignore`
- `netlify.toml`, apenas em headers/seguranca quando necessario.
- `infra/README.md`

## Chat 7 — Refatoracao e Otimizacao
Responsavel por performance, limpeza, imagens, videos, duplicacao e organizacao final.

Pode modificar:
- `public/`
- `assets/`
- `scripts/`
- documentacao de otimizacao, se criada.

Nao deve alterar proposta comercial ou design system sem handoff.

## Chat 8 — Deploy e CI/CD
Responsavel por Netlify/Vercel, pasta `public`/`dist`, scripts de build, `.gitignore`, variaveis e deploy.

Pode modificar:
- `netlify.toml`
- `.gitignore`
- `infra/README.md`
- `README.md`, na parte de publicacao.

Nao deve alterar layout ou conteudo da pagina sem handoff.
