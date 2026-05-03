# WEBSITE ACADEMIA OLYMPO FITNESS

## Descricao do Projeto
Landing page profissional para a academia OLYMPO, com foco em apresentar a estrutura, posicionamento premium, diferenciais, planos, FAQ e canais de contato. O projeto deve seguir uma organizacao por dominios de responsabilidade para permitir trabalho em chats separados, com contexto minimo e regras claras de leitura/escrita.

## Objetivo Comercial
Apresentar a academia OLYMPO para pessoas que desejam melhorar a saude, o condicionamento fisico ou o shape, transmitindo confianca, qualidade e desejo de conhecer os planos.

## Stack Recomendada
- Site estatico com HTML, CSS e JavaScript simples no MVP.
- Deploy na Netlify.
- Formulario via Netlify Forms no primeiro MVP, salvo se surgir necessidade real de backend.
- Assets otimizados em `assets/` e publicados conforme decisao do Chat de Frontend/Deploy.
- Sem framework no MVP, a menos que uma futura decisao arquitetural justifique.

## Estrutura de Pastas
```text
project/
├── CLAUDE.md
├── README.md
├── docs/
│   ├── architecture.md
│   ├── design-tokens.md
│   ├── api-contracts.md
│   ├── chat-workflow.md
│   └── future-chat-prompts.md
├── specs/
│   └── site-mvp.md
├── assets/
│   ├── images/
│   └── videos/
├── public/
├── scripts/
├── frontend/
│   └── README.md
├── backend/
│   └── README.md
├── infra/
│   └── README.md
├── .gitignore
└── netlify.toml
```

## Regras de Nomenclatura
- Pastas e arquivos: `kebab-case`.
- Classes CSS: `kebab-case`, preferindo nomes semanticos como `.hero-section`, `.plan-card`, `.faq-item`.
- IDs HTML: somente quando necessario para navegacao, formularios ou acessibilidade.
- Imagens: `contexto-descricao-tamanho.ext`, exemplo `hero-academia-1600.webp`.
- Videos: `contexto-descricao-duracao.ext`, exemplo `tour-academia-15s.mp4`.
- Documentos de especificacao: `dominio-assunto.md`.

## Glossario do Dominio
- OLYMPO: marca/cliente da academia.
- Landing page: pagina unica focada em apresentacao e conversao.
- Plano: oferta comercial da academia.
- FAQ: perguntas frequentes sobre planos, funcionamento e contato.
- Lead: pessoa interessada que envia formulario ou chama no WhatsApp.
- CTA: chamada para acao, como "Conhecer planos" ou "Falar no WhatsApp".
- Shape: objetivo estetico e fisico do publico-alvo.

## Regras de Seguranca
- Nao commitar senhas, tokens, chaves de API, credenciais ou dados privados.
- Variaveis sensiveis devem ficar na Netlify ou em ambiente local ignorado pelo Git.
- Formularios devem validar campos obrigatorios e evitar exposicao desnecessaria de dados.
- Links externos devem usar `rel="noopener noreferrer"` quando abrirem nova aba.
- Nao incluir arquivos brutos de cliente que contenham informacoes sensiveis.
- Antes do deploy, revisar `.gitignore`, formularios, headers e arquivos publicos.

## Regras de Performance
- Otimizar imagens antes do deploy, priorizando WebP/AVIF quando possivel.
- Evitar bibliotecas grandes sem necessidade clara.
- CSS e JS devem ser enxutos no MVP.
- Usar lazy loading para imagens fora da primeira dobra.
- Evitar videos pesados em autoplay; se usados, devem ser curtos, comprimidos e com fallback.
- Garantir boa experiencia mobile antes de refinamentos desktop.

## O Que o Projeto Nao Deve Usar
- Backend proprio sem necessidade validada.
- Banco de dados no MVP.
- Framework pesado apenas por preferencia.
- Imagens genericas demais que nao comuniquem academia, treino ou estrutura premium.
- Animacoes excessivas que prejudiquem performance ou leitura.
- Copys exageradas, promessas irreais de resultado fisico ou alegacoes sem base.
- Codigo de producao antes da definicao de arquitetura, handoffs e regras.

## Como Cada Chat Deve Atuar
- Ler apenas os arquivos indicados em `docs/chat-workflow.md` e `docs/future-chat-prompts.md`.
- Modificar somente arquivos do seu dominio.
- Registrar decisoes importantes no documento apropriado.
- Manter arquivos curtos e reutilizaveis.
- Evitar refatoracoes fora do escopo do chat.
- Quando precisar tocar em outro dominio, documentar a necessidade e pedir handoff.
- Preservar economia de tokens: nao carregar o projeto inteiro sem motivo.
