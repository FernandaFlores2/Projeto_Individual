var comentarioModel = require("../models/comentarioModel");


function listarComentario(req, res) {
    var fkPublicacao = req.params.fkPublicacao;

    comentarioModel.PostsMaisCurtidos(fkPublicacao)
        .then(
            function (resultado) {


                res.status(200).json(resultado);

            }
        ).catch(
            function (erro) {
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function criarComentario(req, res) {
    var texto = req.body.textoServer;
    var fkPublicacao = req.body.fkPublicacao;
    var fkUsuario = req.body.fkUsuario;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
       comentarioModel.criarComentario(texto, fkUsuario, fkPublicacao)
            .then(
                function (resultado) {

                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


    function atualizarComentario(req, res) {
        var texto = req.body.textoServer;
        var idComentario = req.params.idComentario;
        
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
           comentarioModel.atualizarComentario(texto, idComentario)
                .then(
                    function (resultado) {
    
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }

 function excluirComentario(req, res) {
            var idComentario = req.params.idComentario;
            
        
                // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
               comentarioModel.excluirComentario(idComentario)
                    .then(
                        function (resultado) {
        
                            res.json(resultado);
                        }
                    ).catch(
                        function (erro) {
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
        }






module.exports = {
    listarComentario,
    criarComentario,
    atualizarComentario,
    excluirComentario
}