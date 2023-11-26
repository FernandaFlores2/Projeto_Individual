function entrar() {
    var email = input_email.value;
    var senha =input_senha.value;
    
         //Validando o email de Login//
        
         if (email.indexOf('@') >= 0 && (email.endsWith('.com') || email.endsWith('.br'))) {
          erro.style.display = 'block'
        }
        else {
          erro.style.display = 'block';
          input_email.style.borderColor = 'red';
        }
    
    
      if (senha.trim() === '') {
        erro.textContent = "Senha em branco."
      } else {
        erro.textContent = ""
      }


      
      if(email.indexOf('@') >= 0 && (email.endsWith('.com') || email.endsWith('.br')) && senha.trim() != ''){
        
        fetch("/usuario/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    sessionStorage.setItem("idUsuario", json[0].idUsuario);
                    sessionStorage.setItem("nomeUsuario", json[0].nome);
        
                    setTimeout(function () {
                        window.location.href = "./dashboard/feed.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    erro.innerHTML = texto;
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })


      }
    }
