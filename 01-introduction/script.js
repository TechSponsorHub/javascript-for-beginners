// script.js

// Função para exibir uma mensagem quando o botão é clicado
function exibirMensagem() {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Você clicou no botão! Bem-vindo ao JavaScript!';
}

// Adiciona um evento de clique ao botão
const botao = document.getElementById('meuBotao');
botao.addEventListener('click', exibirMensagem);
