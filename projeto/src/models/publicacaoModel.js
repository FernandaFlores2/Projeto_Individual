var database = require("../database/config")

function listarPublicacao() {
    var instrucao = 
    `
    SELECT p.idPublicacao, p.texto, f.caminhoImagem FROM Publicacao AS p LEFT JOIN Fotos AS f ON f.fkPublicacao = p.idPublicacao
	ORDER BY p.dataPublicacao DESC;  `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function criarPulicacao(texto, idUsuario) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (texto, fkUsuario) VALUES ('${texto}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function adicionarFoto(caminhoImagem, idPublicacao) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO fotos (caminhoImagem, fkPublicacao) VALUES ('${caminhoImagem}', '${idPublicacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}


function atualizarPublicacao(idPublicacao, texto) {

    var instrucao = `
    UPDATE publicacao SET texto = ${texto} WHERE idPublicacao = ${idPublicacao};
`;
 console.log("Executando a instrução SQL: \n" + instrucao);
 return database.executar(instrucao);

}


function excluirFotos(fkPublicacao){
    
    var instrucao = `
       DELETE FROM fotos WHERE fkPublicacao = ${fkPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function excluirPublicacao(idPublicacao) {

    var instrucao = `
       DELETE FROM publicacao WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}





module.exports = {
    listarPublicacao,
    criarPulicacao,
    atualizarPublicacao,
    adicionarFoto,
    excluirFotos,
    excluirPublicacao
};