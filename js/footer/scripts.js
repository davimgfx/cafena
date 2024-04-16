function copyNumber(){
    const numero = document.querySelector('#phone-number p').innerText;
    navigator.clipboard.writeText(numero);
    alert('Número copiado: ' + numero);
  }

  function copyEmail(){
    const email = document.querySelector('#email-text p').innerText;
    navigator.clipboard.writeText(email);
    alert('Email copiado: ' + email);
  }