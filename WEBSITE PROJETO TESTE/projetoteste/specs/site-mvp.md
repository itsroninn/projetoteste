# Spec do MVP

## Objetivo do MVP
Criar uma landing page premium dark para apresentar a academia OLYMPO, comunicar diferenciais, mostrar planos, responder perguntas frequentes e gerar contato de potenciais alunos.

## Secoes Obrigatorias
- Hero com nome OLYMPO, proposta clara e CTA principal.
- Apresentacao curta da academia.
- Diferenciais da estrutura ou experiencia.
- Secao de planos.
- FAQ.
- Secao de contato com CTA para formulario e/ou WhatsApp.
- Rodape com informacoes basicas.

## Secoes Opcionais
- Depoimentos.
- Galeria de fotos.
- Video curto de apresentacao.
- Mapa/localizacao.
- Chamada para avaliacao experimental.
- Lista de modalidades, se a academia oferecer.

## Formularios
Formulario recomendado para MVP:
- nome;
- telefone/WhatsApp;
- objetivo principal;
- mensagem opcional.

Comportamento esperado:
- Validar campos obrigatorios.
- Exibir estado de loading.
- Exibir sucesso ou erro.
- Oferecer alternativa por WhatsApp se o envio falhar.

## Casos de Borda
- Usuario sem WhatsApp ou telefone incompleto.
- Falha no envio do formulario.
- Imagens nao carregam.
- Visitante em conexao lenta.
- Tela muito pequena.
- Texto de plano maior que o previsto.
- FAQ com respostas longas.

## Criterios de Pronto
- Landing page implementada conforme secoes obrigatorias.
- Estilo visual segue `docs/design-tokens.md`.
- Mobile, tablet e desktop testados.
- CTAs funcionando.
- Formulario validado ou alternativa de contato clara.
- Imagens otimizadas.
- Sem dados sensiveis no repositorio.
- Pronto para deploy na Netlify.
