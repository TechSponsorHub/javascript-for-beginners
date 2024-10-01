// Variáveis: let, const e var
let nome = "Alice";  // Variável que pode mudar de valor
const idade = 28;    // Constante, valor não pode ser alterado
var cidade = "Curitiba";  // Variável com escopo de função, não recomendado atualmente

console.log(nome, idade, cidade);  // Saída: Alice 28 Curitiba

// Alterando valores de variáveis declaradas com let e var
nome = "Carlos";
cidade = "São Paulo";
console.log(nome, cidade);  // Saída: Carlos São Paulo

// Erro ao tentar alterar constante
// idade = 30;  // Isso causaria um erro: TypeError: Assignment to constant variable

// Tipos de dados básicos
let numeroInteiro = 42;          // Number
let numeroDecimal = 3.14;        // Number (ponto flutuante)
let texto = "Olá, JavaScript!";  // String
let booleano = true;             // Boolean
let nulo = null;                 // Null
let indefinido;                  // Undefined (não inicializado)
let simbolo = Symbol("ident");   // Symbol, tipo primitivo único

console.log(typeof numeroInteiro);  // Saída: number
console.log(typeof texto);          // Saída: string
console.log(typeof booleano);       // Saída: boolean
console.log(typeof nulo);           // Saída: object (peculiaridade do JS)
console.log(typeof indefinido);     // Saída: undefined
console.log(typeof simbolo);        // Saída: symbol

// Operadores aritméticos
let soma = 10 + 5;
let subtracao = 10 - 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 5;
let resto = 10 % 3;   // Resto da divisão

console.log("Soma:", soma);                   // Saída: Soma: 15
console.log("Subtração:", subtracao);         // Saída: Subtração: 5
console.log("Multiplicação:", multiplicacao); // Saída: Multiplicação: 50
console.log("Divisão:", divisao);             // Saída: Divisão: 2
console.log("Resto:", resto);                 // Saída: Resto: 1

// Operadores de comparação
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 == "10");  // true (igualdade com coerção de tipos)
console.log(10 === "10"); // false (igualdade estrita, sem coerção)
console.log(10 != "10");  // false
console.log(10 !== "10"); // true (desigualdade estrita)

// Operadores lógicos
let verdadeiro = true;
let falso = false;

console.log(verdadeiro && falso);  // false (AND)
console.log(verdadeiro || falso);  // true (OR)
console.log(!verdadeiro);          // false (NOT)

// Condicionais (if, else if, else)
let pontuacao = 75;

if (pontuacao >= 90) {
    console.log("Nota: A");
} else if (pontuacao >= 80) {
    console.log("Nota: B");
} else if (pontuacao >= 70) {
    console.log("Nota: C");
} else {
    console.log("Nota: D ou inferior");
}
// Saída: Nota: C

// Switch case
let cor = "vermelho";

switch (cor) {
    case "vermelho":
        console.log("Cor escolhida: vermelho");
        break;
    case "azul":
        console.log("Cor escolhida: azul");
        break;
    default:
        console.log("Cor desconhecida");
}
// Saída: Cor escolhida: vermelho

// Laços de repetição: for, while e do-while
for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}
// Saída: 0, 1, 2, 3, 4

let contador = 0;
while (contador < 3) {
    console.log("Contagem:", contador);
    contador++;
}
// Saída: 0, 1, 2

contador = 0;
do {
    console.log("Executa ao menos uma vez, contador:", contador);
    contador++;
} while (contador < 1);
// Saída: Executa ao menos uma vez, contador: 0

// Funções: declarações e expressões
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("João"));  // Saída: Olá, João!

// Função como expressão
let somar = function(a, b) {
    return a + b;
};
console.log(somar(2, 3));  // Saída: 5

// Arrow functions (funções de seta)
let multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5));  // Saída: 20

// Funções com valores padrão
function saudacaoComPadrao(nome = "Visitante") {
    return "Olá, " + nome + "!";
}
console.log(saudacaoComPadrao());        // Saída: Olá, Visitante!
console.log(saudacaoComPadrao("Ana"));   // Saída: Olá, Ana!

// Arrays: declaração e métodos básicos
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]);  // Saída: maçã

frutas.push("uva");    // Adiciona ao final
console.log(frutas);   // Saída: ["maçã", "banana", "laranja", "uva"]

frutas.pop();          // Remove o último elemento
console.log(frutas);   // Saída: ["maçã", "banana", "laranja"]

frutas.shift();        // Remove o primeiro elemento
console.log(frutas);   // Saída: ["banana", "laranja"]

frutas.unshift("melancia");  // Adiciona ao início
console.log(frutas);         // Saída: ["melancia", "banana", "laranja"]

// Objetos: declaração e acesso
let pessoa = {
    nome: "Lucas",
    idade: 30,
    cidade: "Rio de Janeiro"
};
console.log(pessoa.nome);        // Saída: Lucas
console.log(pessoa["idade"]);    // Saída: 30

pessoa.profissao = "Engenheiro";  // Adiciona uma nova propriedade
console.log(pessoa);             // Saída: { nome: "Lucas", idade: 30, cidade: "Rio de Janeiro", profissao: "Engenheiro" }

// Manipulação de objetos: loop for...in
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
// Saída:
// nome: Lucas
// idade: 30
// cidade: Rio de Janeiro
// profissao: Engenheiro

// Laços com arrays: for...of
let numeros = [10, 20, 30, 40];
for (let numero of numeros) {
    console.log(numero);
}
// Saída: 10, 20, 30, 40

// Manipulação de arrays com métodos avançados: map, filter e reduce
let quadrados = numeros.map(num => num * num);
console.log(quadrados);  // Saída: [100, 400, 900, 1600]

let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);  // Saída: [10, 20, 30, 40]

let somaTotal = numeros.reduce((total, num) => total + num, 0);
console.log(somaTotal);  // Saída: 100

// Escopos: global, função e bloco
var escopoGlobal = "Sou global";

function verificarEscopo() {
    let escopoFuncao = "Sou local à função";
    if (true) {
        let escopoBloco = "Sou local ao bloco";
        console.log(escopoBloco);  // Saída: Sou local ao bloco
    }
    console.log(escopoFuncao);     // Saída: Sou local à função
}

verificarEscopo();
console.log(escopoGlobal);  // Saída: Sou global
// console.log(escopoFuncao); // Isso causaria um erro, pois escopoFuncao é local
