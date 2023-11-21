var curtidasPublicacaoModel = require("../models/curtidasPublicacaoModel");


function PostsMaisCurtidos(req, res) {
    var fkUsuario = req.params.fkUsuario;

    curtidasPublicacaoModel.PostsMaisCurtidos(fkUsuario)
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



function curtirPost(req, res) {
    var idPublicacao = req.body.idPublicacao;
    var idUsuario = req.body.idUsuario;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
       curtidasPublicacaoModel.descurtirPost(idPublicacao, idUsuario)
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

function descurtirPost(req, res) {
    var idPublicacao = req.params.idPublicacao;
    

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
       curtidasPublicacaoModel.descurtirPost(idPublicacao)
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
    PostsMaisCurtidos,
    curtirPost,
    descurtirPost
}