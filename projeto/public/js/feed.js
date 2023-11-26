function mostrarComentarios(comentario) {
    // containerGeralComentarios.style.display = "block";
    
    var idPublicacao = comentario.getAttribute("data-id"); /*pega o id do botão, atibuto personalizado */
    
    var listaComentario = `containerListaComentarios${idPublicacao}`;

    var Geral = `containerGeralComentarios${idPublicacao}`;
    document.getElementById(Geral).style.display = "block"; /*pega o elemento que temo id, vai no documetno quefoi passado o id */
    
    
    
    fetch(`/comentario/listarComentario/${idPublicacao}`)
    .then(function (resposta) {
        
        resposta.json().then(resposta => {
                document.getElementById(listaComentario).innerHTML = "";

                for (var i = 0; i < resposta.length; i++) {
                    var comentario = resposta[i];

                    document.getElementById(listaComentario).innerHTML += `
                <li>
                  <div class="linha-dados-usuario">
                    <div class="container-image-comentario">
                      <img id="fotoLinha" src="../assets/img/foto.jpg" alt="" />
                    </div>
                    <h4 id="nomeComentario" class="nomeComentario"></h4>
                  </div>
                  <div class="linha-comentario">
                    <p id="comentarioPublicacao">${comentario.texto}</p>
                  </div>
                </li>`;
                }
            })
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });


}


function mostrarFoto() {
    var reader = new FileReader();
    reader.onload = () => fotoEscolhidaPublic.src = reader.result;
    reader.readAsDataURL(image.files[0]);

    fotoPubli.style.display = "block";

}



puxarNome.innerHTML = sessionStorage.nomeUsuario;
nomeMenu.innerHTML = sessionStorage.nomeUsuario;
nomePost.innerHTML = sessionStorage.nomeUsuario;
linhaNomeUsuario.innerHTML = sessionStorage.nomeUsuario;


function publicar() {
    var idUsuario = sessionStorage.idUsuario;

    var corpo = textarea.value;
    var imagem = fotoEscolhidaPublic.src;


    fetch(`/publicacao/criarPublicacao/${idUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            textoServer: corpo,
            caminhoImagemServer: imagem
        })
    }).then(function (resposta) {

        console.log(corpo + imagem);


        if (resposta.ok) {
            // window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");

        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function editar(idPublicacao) {
    sessionStorage.ID_POSTAGEM_EDITANDO = idPublicacao;
    console.log("cliquei em editar - " + idPublicacao);
    window.alert("Você será redirecionado à página de edição do aviso de id número: " + idPublicacao);
    window.location = "/dashboard/edicao-aviso.html"

}

function deletar(idPublicacao) {
    console.log("Criar função de apagar post escolhido - ID" + idPublicacao);
    fetch(`/publicacao/deletar/${idPublicacao}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Post deletado com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            window.location = "/dashboard/feed.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function listarPublicacao() {
    postagens.innerHTML = "";
    fetch("/publicacao/listarPublicacao").then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {

                for (var i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    postagens.innerHTML += `
        <li class="post">
          <div class="post-usuario">
            <div class="imagem-post-usuario">
              <img src="../assets/img/foto.jpg" alt="">
            </div>
            <div id="nomePost" class="nome-hora">${publicacao.nome}
            </div>

          </div>

          <p id="PublicacaoTexto">${publicacao.texto}</p>

          <div class="btn-posts">
            <button type="button" class="curtir"><img src="../assets/img/heart.svg" alt="Curtir">Curtir</button>
            <button onclick="mostrarComentarios(this)" type="button" data-id="${resposta[i].idPublicacao}" class="comentario"><img
                src="../assets/img/comment.svg" alt="Comentario">Comentar</button>
          </div>

          <div id="containerGeralComentarios${resposta[i].idPublicacao}" style="display: none";>
          <div class="container-comentario">
                <textarea class="text-comentario" id="textareaComentario${resposta[i].idPublicacao}" name="textarea" placeholder="Faça um comentário!"
                  id="comentario"></textarea>
                <img onclick="enviarComentario(this), setTimeout(()=> mostrarComentarios(this),200)" data-id="${resposta[i].idPublicacao}" src="../assets/img/botao-enviar.png" alt="enviar comentario">
              </div>
          <ul id="containerListaComentarios${resposta[i].idPublicacao}" class="container-lista-comentarios">
          
        </ul>
            </div>
          
              </li>

                    `;

                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}

function enviarComentario(botao) {
    var idPublicacao = botao.getAttribute("data-id");

    // var corpo = document.getElementById("textareaComentario").value;
    var textoComent = `textareaComentario${idPublicacao}`;

    fetch(`/comentario/criarComentario`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            textoServer:  document.getElementById(textoComent).value,
            fkUsuario: sessionStorage.getItem("idUsuario"), 
            fkPublicacao: idPublicacao
        })
    }).then(function (resposta) {

        console.log(resposta);
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}
