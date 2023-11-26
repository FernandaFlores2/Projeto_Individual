var database = require("../database/config")

function obterMedia() {
    var instrucao = 
    `SELECT COUNT(idComentario) AS 'Dado' FROM Comentario 
	GROUP BY fkPublicacao ORDER BY COUNT(idComentario) DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    obterMedia
};