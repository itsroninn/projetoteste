# Arquitetura

## Visao Geral
O projeto sera uma landing page estatica para a OLYMPO, organizada por dominios de responsabilidade. A arquitetura inicial favorece simplicidade, performance e facilidade de deploy na Netlify.

## Frontend
- Responsavel pela pagina publica, secoes, estilos, responsividade e interacoes visuais.
- Stack recomendada para MVP: HTML, CSS e JavaScript simples.
- Local previsto: `public/` para arquivos publicados e `frontend/` para documentacao/apoio do dominio.
- O frontend deve seguir `docs/design-tokens.md` e `specs/site-mvp.md`.

## Backend/API
O MVP nao deve ter backend proprio, salvo decisao futura documentada. O formulario inicial deve usar Netlify Forms ou alternativa estatica similar.

Se um backend for necessario no futuro:
- Documentar motivacao em `docs/api-contracts.md`.
- Definir endpoints, payloads, erros e validacoes antes de implementar.
- Manter qualquer segredo fora do repositorio.

## Assets
- Imagens em `assets/images/`.
- Videos em `assets/videos/`.
- Assets finais publicados devem ser copiados/organizados pelo Chat de Frontend ou Deploy conforme estrutura escolhida.
- Nomear assets de forma descritiva e otimizar antes do deploy.

## Formularios
Formulario previsto: captura de interesse/contato para conhecer planos ou falar com a academia.

Campos provaveis:
- nome;
- telefone ou WhatsApp;
- objetivo principal;
- mensagem opcional.

O contrato detalhado esta em `docs/api-contracts.md`.

## Deploy
Deploy pretendido na Netlify.

Responsabilidades:
- `infra/`: documentacao de deploy e configuracao.
- `netlify.toml`: configuracao inicial.
- Chat 8: revisar pasta publicada, redirects, headers, variaveis e build.

## Fronteiras Entre Dominios
- Planejamento e Arquitetura: define estrutura, regras e decisoes.
- Design System e UI: define tokens, componentes e padroes visuais.
- Frontend: implementa a landing page e interacoes visuais.
- Backend e API: cuida apenas de formularios, rotas, banco e integracoes quando existirem.
- Testes e QA: valida comportamento, responsivo, links e formularios.
- Seguranca e Auditoria: revisa exposicao, dados, headers e riscos.
- Refatoracao e Otimizacao: melhora performance, organizacao e assets.
- Deploy e CI/CD: prepara publicacao na Netlify.

Nenhum chat deve modificar arquivos fora do seu dominio sem registrar a necessidade de handoff.
