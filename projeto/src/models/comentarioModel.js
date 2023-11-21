var database = require("../database/config")

function listarComentario(fkPublicacao) {
    var instrucao = 
    `
    SELECT idComentario, texto FROM comentario 	
	WHERE fkPublicacao = ${fkPublicacao}; `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function criarComentario(texto, fkUsuario, fkPublicacao) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO comentario (texto, fkUsuario, fkPublicacao) VALUES = ('${texto}','${fkUsuario}', '${fkPublicacao}');

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function atualizarComentario(texto, idComentario) {

    var instrucao = `
    UPDATE comentario SET texto = ${texto} WHERE idComentario = ${idComentario};
`;
 console.log("Executando a instrução SQL: \n" + instrucao);
 return database.executar(instrucao);

}


function excluirComentario(idComentario) {

    var instrucao = `
       DELETE FROM comentario WHERE idComentario = ${idComentario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function excluirComentarioGeral(idPublicacao){
    var instrucao = `
    DELETE FROM comentario WHERE fkPublicacao = ${idPublicacao};
 `;
 console.log("Executando a instrução SQL: \n" + instrucao);
 return database.executar(instrucao);
}

module.exports = {
    listarComentario,
    criarComentario,
    atualizarComentario,
    excluirComentario,
    excluirComentarioGeral
};