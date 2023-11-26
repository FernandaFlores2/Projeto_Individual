var publicacaoModel = require("../models/publicacaoModel");
var curtidasPublicacaoModel = require("../models/curtidasPublicacaoModel");
var comentarioModel = require("../models/comentarioModel");

function listarPublicacao(req, res) {

    publicacaoModel.listarPublicacao()
        .then(
            function (resultadoAutenticar) {


                res.status(200).json(resultadoAutenticar);

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function criarPublicacao(req, res) {
    var texto = req.body.textoServer;
    var idUsuario = req.params.idUsuario;
    var caminhoImagem = req.body.caminhoImagemServer;


    // Faça as validações dos valores
    if (texto == "") {
        res.status(400).send("Insira um texto!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        publicacaoModel.criarPublicacao(texto, idUsuario)
            .then(
                function (resultado) {

                    // if (caminhoImagem != " ") {
                        publicacaoModel.adicionarFoto(caminhoImagem, resultado.insertId)
                    
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function atualizarPublicacao(req, res) {
    var idPublicacao = req.params.idPublicacao;
    var texto = req.body.textoServer;

    if (texto == '') {
        res.status(400).send("Publicação está vazia!");
    } else {

        publicacaoModel.atualizarPublicacao(idPublicacao, texto)
            .then(
                function () {

                    res.status(200).send("Publicação foi atualizada com sucesso!");

                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function excluirPublicacao(req, res) {
    var idPublicacao = req.params.idPublicacao;


    publicacaoModel.excluirFotos(idPublicacao)
        .then(
            function () {
                curtidasPublicacaoModel.descurtirPost(idPublicacao)
                    .then(

                        function () {
                            comentarioModel.excluirComentarioGeral(idPublicacao)
                                .then(

                                    function () {
                                        publicacaoModel.excluirPublicacao(idPublicacao)
                                            .then(
                                                function () {

                                                    res.status(200).send("Publicação excluída com sucesso!");
                                                }
                                            )
                                    }
                                )
                        }


                    )

            }
        ).catch(
            function (erro) {
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    listarPublicacao,
    criarPublicacao,
    atualizarPublicacao,
    excluirPublicacao
}