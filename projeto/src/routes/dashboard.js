var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/obterDadosComentarios/", function (req, res) {
    dashboardController.obterDadosComentarios(req, res);
})
router.get("/obterDadosGenero/", function (req, res) {
    dashboardController.obterDadosGenero(req, res);
})



module.exports = router;

/*
get - pegar os selects
post - insert
put - update
delete - deletar

*/