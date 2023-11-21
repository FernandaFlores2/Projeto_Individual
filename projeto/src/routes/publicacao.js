var express = require("express");
var router = express.Router();

var publicacaoController = require("../controllers/publicacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listarPublicacao", function (req, res) {
    publicacaoController.listarPublicacao(req, res);
})

router.post("/criarPublicacao/:idUsuario", function (req, res) {
    publicacaoController.criarPublicacao(req, res);
});

router.put("/atualizarPublicacao/:idPublicacao", function (req, res) {
    publicacaoController.atualizarPublicacao(req, res);
})

router.delete("/excluirPublicacao/:idPublicacao", function (req, res) {
    publicacaoController.excluirPublicacao(req, res);
})



module.exports = router;

/*
get - pegar os selects
post - insert
put - update
delete - deletar

*/