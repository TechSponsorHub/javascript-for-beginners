# Introdução à Manipulação do DOM

## O que é o DOM?

O **Document Object Model (DOM)** é uma interface de programação para documentos da web. Ele representa a página como uma estrutura de árvore, onde cada nó é um objeto que representa uma parte do documento (por exemplo, elementos, atributos, texto).

Com o DOM, você pode:

- Manipular dinamicamente elementos HTML.
- Modificar o conteúdo, a estrutura e o estilo das páginas da web.
- Reagir à entrada do usuário ou a outros eventos em tempo real.

Em JavaScript, o DOM permite que você interaja e altere a estrutura do documento, que é um dos passos fundamentais para criar sites dinâmicos.

## Estrutura da Árvore do DOM

O DOM trata elementos HTML como uma hierarquia de **nós**. Aqui está uma estrutura simples:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título da Página</title>
  </head>
  <body>
    <h1>Bem-vindo à Minha Página!</h1>
    <p>Esta é uma parágrafo.</p>
  </body>
</html>
