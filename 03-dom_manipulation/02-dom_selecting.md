# Manipulando o DOM

## Selecionando Elementos

O primeiro passo para manipular o DOM é selecionar os elementos que você deseja alterar. Existem várias maneiras de selecionar elementos usando JavaScript:

### 1. `getElementById()`

Seleciona um elemento pelo seu `id`.

``` javascript
let titulo = document.getElementById("meuTitulo");
console.log(titulo); // Saída: <h1 id="meuTitulo">Título</h1>
```

### 2. `getElementsByClassName()`

Seleciona todos os elementos que têm uma determinada classe. Retorna uma coleção de elementos.

``` javascript
let paragrafos = document.getElementsByClassName("meuParagrafo");
console.log(paragrafos); // Saída: HTMLCollection com todos os parágrafos com a classe "meuParagrafo"
```

### 3. `getElementsByTagName()`

Seleciona todos os elementos de um determinado tipo.

``` javascript
let divs = document.getElementsByTagName("div");
console.log(divs); // Saída: HTMLCollection com todos os elementos <div>
```

### 4. `querySelector()`

Seleciona o primeiro elemento que corresponde a um seletor CSS.

``` javascript
let primeiroParagrafo = document.querySelector("p");
console.log(primeiroParagrafo); // Saída: o primeiro <p> encontrado no documento
```

### 5. `querySelectorAll()`

Seleciona todos os elementos que correspondem a um seletor CSS.

``` javascript
let todosOsParagrafos = document.querySelectorAll("p");
console.log(todosOsParagrafos); // Saída: NodeList com todos os <p> no documento
```
