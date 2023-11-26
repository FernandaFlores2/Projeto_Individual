var operacaoMatematicaModel = require("../models/operacaoMatematicaModel");


function obterMedia(req, res) {

    operacaoMatematicaModel.obterMedia()
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
    obterMedia

}