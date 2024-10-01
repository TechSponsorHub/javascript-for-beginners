# Eventos no DOM

## O que são Eventos?

Eventos são ações ou ocorrências que acontecem no documento, como cliques, teclas pressionadas, ou movimentos do mouse. JavaScript permite que você responda a esses eventos e execute código em resposta a eles.

## Tipos Comuns de Eventos

1. **click**: Ocorre quando um elemento é clicado.
2. **mouseover**: Ocorre quando o mouse é movido sobre um elemento.
3. **keydown**: Ocorre quando uma tecla é pressionada.
4. **submit**: Ocorre quando um formulário é enviado.

## Adicionando Eventos

Você pode adicionar eventos a elementos usando `addEventListener`.

### Exemplo de Clique

```javascript
let botao = document.getElementById("meuBotao");
botao.addEventListener("click", function() {
    alert("Botão clicado!");
});
```

### Exemplo de Teclado

``` javascript
document.addEventListener("keydown", function(event) {
    console.log("Tecla pressionada:", event.key);
});
```

## Removendo Eventos

Você pode remover um evento usando `removeEventListener`, mas precisa passar a mesma função que foi usada para adicioná-lo.

``` javascript
function minhaFuncao() {
    alert("Evento removido!");
}

botao.addEventListener("click", minhaFuncao);
botao.removeEventListener("click", minhaFuncao); // Remove o evento
```
