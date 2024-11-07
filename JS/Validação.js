function validarSenhas() {
    senha = document.getElementsByName('senha').value;
    senhaC = document.getElementsByName('senhaC').value;
  
    if (senha != senhaC) {
      senhaC.setCustomValidity("Senhas diferentes!");
      return false;
    } else {
      return true;
    }
  }
