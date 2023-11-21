var express = require("express");
var router = express.Router();

var curtidasPublicacaoController = require("../controllers/curtidasPublicacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/postsMaisCurtidos/:fkUsuario", function (req, res) {
    curtidasPublicacaoController.PostsMaisCurtidos(req, res);
})

router.post("/curtirPost", function (req, res) {
    curtidasPublicacaoController.curtirPost(req, res);
});

router.delete("/descurtirPost/:idPublicacao", function (req, res) {
    curtidasPublicacaoController.atualizarPublicacao(req, res);
})




module.exports = router;

/*
get - pegar os selects
post - insert
put - update
delete - deletar

*/