var database = require("../database/config")

function obterDadosComentarios() {
    var instrucao = 
    `SELECT COUNT(idComentario) AS 'Dado' FROM Comentario 
	GROUP BY fkPublicacao ORDER BY COUNT(idComentario) DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosGenero() {
    var instrucao = 
    `SELECT COUNT(idUsuario) AS 'Dado', Genero FROM Usuario  
	GROUP BY genero ORDER BY genero; `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    obterDadosComentarios,
    obterDadosGenero
};