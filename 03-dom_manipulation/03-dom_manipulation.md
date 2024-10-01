# Manipulação do DOM

## Alterando o Conteúdo

Uma vez que você tenha selecionado um elemento, pode alterar seu conteúdo usando a propriedade `innerHTML` ou `textContent`.

### 1. `innerHTML`

Usado para definir ou obter o conteúdo HTML de um elemento.

``` javascript
let titulo = document.getElementById("meuTitulo");
titulo.innerHTML = "Novo Título"; // Altera o conteúdo do título
```

### 2. `textContent`

Usado para definir ou obter o texto de um elemento.

``` javascript
let paragrafo = document.querySelector("p");
paragrafo.textContent = "Este é um novo parágrafo."; // Altera o texto do parágrafo
```

## Alterando Estilos

Você pode alterar o estilo de um elemento acessando a propriedade `style`.

``` javascript
let titulo = document.getElementById("meuTitulo");
titulo.style.color = "blue"; // Muda a cor do texto para azul
titulo.style.fontSize = "24px"; // Altera o tamanho da fonte
```

## Adicionando e Removendo Elementos

### 1. Adicionando Elementos

Você pode criar novos elementos e adicioná-los ao DOM.

``` javascript
let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este é um parágrafo adicionado dinamicamente.";
document.body.appendChild(novoParagrafo); // Adiciona o novo parágrafo ao final do body
```

### 2. Removendo Elementos

Você pode remover elementos selecionando-os e usando `remove()`.

``` javascript
let paragrafoRemover = document.querySelector("p");
paragrafoRemover.remove(); // Remove o primeiro parágrafo encontrado
```

## Exemplo Completo

Aqui está um exemplo completo de manipulação do DOM:

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de DOM</title>
</head>
<body>
    <h1 id="meuTitulo">Título Original</h1>
    <p class="meuParagrafo">Parágrafo original.</p>
    <button id="meuBotao">Clique para mudar</button>

    <script>
        document.getElementById("meuBotao").addEventListener("click", function() {
            document.getElementById("meuTitulo").innerHTML = "Título Mudado!";
            document.querySelector(".meuParagrafo").textContent = "Parágrafo mudado.";
        });
    </script>
</body>
</html>
```
