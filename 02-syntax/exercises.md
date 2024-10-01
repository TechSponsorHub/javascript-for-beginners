# Exercícios de Sintaxe Básica do JavaScript

## 1. Declaração de Variáveis

Declare três variáveis: `nome`, `idade` e `cidade`. Atribua valores a elas e use `console.log` para exibir os valores.

**Exemplo:**

``` javascript
let nome = "Carlos";
let idade = 30;
let cidade = "São Paulo";

console.log(nome); // Saída: Carlos
console.log(idade); // Saída: 30
console.log(cidade); // Saída: São Paulo
```

## 2. Tipos de Dados

Crie variáveis com diferentes tipos de dados: número, string, booleano, nulo e indefinido. Use ```console.log``` e ```typeof``` para exibir o tipo de cada variável.

**Exemplo:**

``` javascript
let exemploNumero = 50;
let exemploTexto = "Exemplo de string";
let exemploBooleano = false;

console.log(typeof exemploNumero); // Saída: number
console.log(typeof exemploTexto); // Saída: string
console.log(typeof exemploBooleano); // Saída: boolean
```

## 3. Operadores

Crie expressões que usem os operadores de adição, subtração, multiplicação e divisão. Exiba os resultados usando ```console.log```.

**Exemplo:**

``` javascript
let resultadoSoma = 15 + 10;
console.log("Soma:", resultadoSoma); // Saída: Soma: 25
```

## 4. Condicionais

Escreva uma função que verifica se uma pessoa é maior ou menor de idade com base na idade fornecida. Se a pessoa tiver 18 anos ou mais, exiba "Maior de idade"; caso contrário, exiba "Menor de idade".

**Exemplo:**

``` javascript
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
verificarIdade(20); // Saída: Maior de idade
```

## 5. Laços de Repetição

Use um laço ```for``` para exibir os números de 1 a 10 no console.

**Exemplo:**

``` javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

## 6. Funções

Escreva uma função chamada ```dobrarNumero``` que recebe um número como argumento e retorna o dobro desse número. Teste a função com diferentes números.

**Exemplo:**

``` javascript
function dobrarNumero(numero) {
    return numero * 2;
}

console.log(dobrarNumero(5)); // Saída: 10
```
