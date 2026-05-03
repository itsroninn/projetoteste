# Infra e Deploy

Deploy pretendido: Netlify.

## Responsabilidades
- Configurar pasta publicada.
- Documentar variaveis de ambiente sem valores reais.
- Revisar redirects e headers.
- Manter checklist de deploy.

## Configuracao Inicial
O MVP estatico deve publicar a pasta `public/`.

## Variaveis de Ambiente
Nenhuma variavel definida no momento.

Se surgirem variaveis:
- documentar nome e finalidade;
- nao registrar valor real;
- configurar no painel da Netlify.

## Checklist de Deploy
- [ ] Confirmar pasta publicada.
- [ ] Validar `netlify.toml`.
- [ ] Revisar formulario `lead-olympo` com atributos do Netlify Forms no HTML publicado.
- [ ] Configurar notificacoes de formulario no painel da Netlify, se a operacao precisar receber leads por email.
- [ ] Revisar headers.
- [ ] Testar URL final.
