const form = document.getElementById('avaliacaoForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Aqui você implementaria a lógica para enviar os dados do formulário para um servidor
    // Por exemplo, usando fetch ou XMLHttpRequest

    mensagem.textContent = 'Obrigado por sua avaliação!';
});