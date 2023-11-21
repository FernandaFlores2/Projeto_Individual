var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listarComentario/:fkPublicacao", function (req, res) {
    comentarioController.listarComentario(req, res);
})

router.post("/criarComentario", function (req, res) {
    comentarioController.criarComentario(req, res);
});

router.put("/atualizarComentario/:idComentario", function (req, res) {
    comentarioController.atualizarComentario(req, res);
})

router.delete("/excluirComentario/:idComentario", function (req, res) {
    comentarioController.excluirComentario(req, res);
})




module.exports = router;

/*
get - pegar os selects
post - insert
put - update
delete - deletar

*/