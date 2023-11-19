function cadastrar() {
    var nome = input_nome.value;
    var dataNascimento = input_dataNascimento.value;
    var genero = input_generoEscolha.value;
    var email = input_email.value;
    var senha = input_senha.value;

    var possui_especial =
        senha.indexOf('#') >= 0 ||
        senha.indexOf('@') >= 0 ||
        senha.indexOf('!') >= 0 ||
        senha.indexOf('%') >= 0 ||
        senha.indexOf('?') >= 0 ||
        senha.indexOf('-') >= 0 ||
        senha.indexOf('+') >= 0 ||
        senha.indexOf('_') >= 0;

    if (email.indexOf('@') >= 0 && (email.endsWith('.com') || email.endsWith('.br') || email.endsWith('.outlook'))) {
        erroEmail.style.display = 'none'
    }
    else {
        erroEmail.style.display = 'block';
        input_email.style.borderColor = 'red';
    }

    if (senha.length >= 8 && possui_especial && (senha != senha.toUpperCase() && senha != senha.toLowerCase())) {
        erroSenha.style.display = 'none'
    }
    else {
        erroSenha.style.display = 'block'
        input_senha.style.borderColor = 'red'
    }

    if (email.indexOf('@') >= 0 && (email.endsWith('.com') || email.endsWith('.br') || email.endsWith('.outlook')) && senha.length >= 8 && possui_especial && (senha != senha.toUpperCase() && senha != senha.toLowerCase())) {

        fetch("/usuario/cadastrar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // crie um atributo que recebe o valor recuperado aqui
              // Agora vá para o arquivo routes/usuario.js
              nomeServer: nome,
              dataNascimentoServer: dataNascimento,
              generoServer: genero,
              emailServer: email,
              senhaServer: senha,
              
            }),
          })
            .then(function (resposta) {
              console.log("resposta: ", resposta);
      
              if (resposta.ok) {
      
                
                setTimeout(() => {
                  window.location = "../login.html";
                }, "2000");
      
              } else {
                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });              }
            })
            .catch(function (resposta) {
              console.log(`#ERRO: ${resposta}`);
              finalizarAguardar();
            });
      

    }

}

