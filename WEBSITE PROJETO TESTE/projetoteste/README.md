# WEBSITE ACADEMIA OLYMPO FITNESS

## O Que E
Projeto de landing page para a academia OLYMPO. O objetivo comercial e apresentar a academia, transmitir uma percepcao premium em estilo dark, destacar planos, responder perguntas frequentes e direcionar visitantes para contato.

Este repositorio comeca pela fundacao: documentacao, arquitetura, regras de dominio e prompts para chats futuros. O site em si ainda nao foi implementado.

## Como Abrir Localmente
No momento nao ha site de producao implementado. Quando o Chat de Frontend criar a primeira versao, a forma de abrir devera ser documentada aqui.

Recomendacao inicial para MVP estatico:
```bash
# abrir o arquivo public/index.html no navegador
# ou usar um servidor local simples, se necessario
```

## Como Publicar
Deploy pretendido: Netlify.

Fluxo recomendado:
1. Confirmar qual pasta sera publicada: provavelmente `public/` ou `dist/`.
2. Conferir `netlify.toml`.
3. Validar formularios, links, imagens e responsividade.
4. Publicar via painel da Netlify ou Git integrado.

## Arquivos Importantes
- `CLAUDE.md`: contexto principal para agentes/chats.
- `docs/architecture.md`: arquitetura e fronteiras de dominio.
- `docs/design-tokens.md`: base visual do projeto.
- `docs/api-contracts.md`: contrato de formularios/API.
- `docs/chat-workflow.md`: divisao por chats e responsabilidades.
- `docs/future-chat-prompts.md`: prompts prontos para abrir os proximos chats.
- `specs/site-mvp.md`: escopo inicial do MVP.
- `netlify.toml`: configuracao inicial de deploy.

## Cuidados Antes do Deploy
- Confirmar se nao existem arquivos sensiveis no repositorio.
- Revisar imagens e videos em `assets/`.
- Verificar campos obrigatorios do formulario.
- Testar mobile, tablet e desktop.
- Testar links de CTA e navegacao.
- Revisar SEO basico: titulo, descricao, headings e textos alternativos.
- Validar performance e tamanho dos assets.

## Checklist de Entrega
- [ ] Estrutura documental aprovada.
- [ ] Design tokens definidos.
- [ ] MVP implementado conforme `specs/site-mvp.md`.
- [ ] Formulario ou CTA validado.
- [ ] FAQ e planos implementados.
- [ ] Responsivo testado.
- [ ] Auditoria de seguranca concluida.
- [ ] Otimizacao final concluida.
- [ ] Deploy Netlify configurado.
- [ ] URL final validada.
