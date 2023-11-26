var dashboardModel = require("../models/dashboardModel");


function obterDadosComentarios(req, res) {

    dashboardModel.obterDadosComentarios()
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

function obterDadosGenero(req, res) {

    dashboardModel.obterDadosGenero()
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

module.exports = {
    obterDadosComentarios,
    obterDadosGenero

}