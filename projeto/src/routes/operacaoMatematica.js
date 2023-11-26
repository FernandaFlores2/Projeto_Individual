var express = require("express");
var router = express.Router();

var operacaoMatematicaController = require("../controllers/operacaoMatematicaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/obterMedia/", function (req, res) {
    dashboardController.obterDadosComentarios(req, res);
})




module.exports = router;

/*
get - pegar os selects
post - insert
put - update
delete - deletar

*/