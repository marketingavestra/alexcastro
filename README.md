# Alex Castro — portfólio de serviços

**Endereço do GitHub Pages (após ativação):** https://marketingavestra.github.io/alexcastro/

Site responsivo em português, com foco em celular e identidade pessoal de Alex Castro. Paleta azul e branca, retratos fornecidos, apresentação em vídeo e orçamento que continua no WhatsApp.

## Abrir e editar

Não precisa instalar dependências nem compilar. Abra `dist/index.html` no navegador ou, para uma prévia local, execute na pasta do projeto:

```sh
python3 -m http.server 4187 --directory dist
```

Acesse `http://localhost:4187`. Para colocar em uma hospedagem estática própria, envie o conteúdo de `dist/`.

- `dist/index.html`: textos, serviços, telefone, metadados, formulário e estrutura.
- `dist/styles.css`: identidade visual, layouts responsivos e movimento reduzido.
- `dist/app.js`: menu, animações de entrada, diálogo de orçamento e reprodução do vídeo.
- `dist/assets/`: imagens otimizadas, vídeo original, ícone e fonte Inter com licença OFL.
- `.openai/hosting.json`: identidade da hospedagem anterior no Sites, preservada como referência.

## Atendimento e contato

Cidade informada pelo proprietário: Santa Maria, RS. WhatsApp extraído do vídeo fornecido: **+55 55 99183-0318**. Os serviços incluem instalações, elétrica, hidráulica, pintura e pequenas reformas, montagem e reparos, mecânica, transporte de cargas e manutenção geral.

O formulário monta uma mensagem usando o nome, o serviço, o bairro/local e a descrição. Abre o WhatsApp, onde o visitante revisa e confirma o envio. Não há envio automático, backend de leads, armazenamento dos campos ou promessa automática de agendamento. Valores, escopo e disponibilidade são combinados com o Alex. O destino também aparece em links diretos e no telefone; ao mudar o número, atualize os links, os dados estruturados e `app.js`.

## Materiais e referência

Fotos e vídeo fornecidos pelo usuário. O vídeo está intacto e menciona originalmente atendimento em todo o RS; o conteúdo do site destaca Santa Maria conforme a confirmação posterior do proprietário. Equipamentos próprios, CNPJ e emissão de nota fiscal estão descritos no vídeo, sem inventar um número de CNPJ. Não foram criadas avaliações, certificações ou fotos de obras.

Referência visual: https://www.lkclinic.shop — retrato em destaque, marca pessoal, tipografia limpa e ações grandes para celular. O layout, os textos e o monograma deste projeto foram criados para Alex Castro.

O site foi preparado com HTML, CSS e JavaScript independentes de framework. Os recursos visuais respeitam a preferência do sistema por movimento reduzido. As imagens têm versões leves para a web e o vídeo só é carregado para reprodução quando solicitado.

## Hospedar no GitHub Pages

A branch `main` contém o projeto completo. A branch `gh-pages` contém somente os arquivos publicáveis da pasta `dist/`, na raiz, com `.nojekyll`. Os arquivos são estáticos e não precisam de compilação.

Para ativar a hospedagem deste repositório:

1. Abra https://github.com/marketingavestra/alexcastro/settings/pages
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Em **Branch**, escolha **gh-pages** e **/(root)**; clique em **Save**.
4. Aguarde o GitHub concluir a publicação. O endereço será https://marketingavestra.github.io/alexcastro/

A integração utilizada nesta sessão permite gravar os arquivos e branches, mas não alterar a configuração de GitHub Pages. A ativação acima precisa ser feita por um administrador do repositório.

Para atualizar o site depois, altere os arquivos em `dist/` na `main` e publique seu conteúdo na raiz da branch `gh-pages`. Não há sincronização automática configurada entre as branches.
