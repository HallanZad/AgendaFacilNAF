function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}       
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}       

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
}

function sendMessage(message) {
    const chatContent = document.getElementById('chat-content');
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message');
    userMessage.textContent = message;
    chatContent.appendChild(userMessage);
    
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message');
        botMessage.textContent = botResponse;
        chatContent.appendChild(botMessage);
        chatContent.scrollTop = chatContent.scrollHeight;
    }, 800);
}

function getBotResponse(userMessage) {
    if (userMessage.includes("serviços")) {
        return "Oferecemos diversos serviços, como [detalhes dos serviços].";
    } else if (userMessage.includes("horário")) {
        return "Nosso horário de funcionamento é [detalhes do horário].";
    } else if (userMessage.includes("ajuda")) {
        return "Estou aqui para ajudar! O que você precisa?";
    } else {
        return "Desculpe, não entendi sua mensagem.";
    }
}

function validarSenha() {
    let Senha = document.getElementById('Senha');
    let SenhaC = document.getElementById('SenhaC');
  
    if (Senha.value != SenhaC.value) {
        SenhaC.setCustomValidity("Senhas diferentes!");
        SenhaC.reportValidity();
        return false;
      } else {
        SenhaC.setCustomValidity("");
        return true;
      }    
  }