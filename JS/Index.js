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