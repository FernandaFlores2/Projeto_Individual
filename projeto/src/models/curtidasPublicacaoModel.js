var database = require("../database/config")

function PostsMaisCurtidas(fkUsuario) {
    var instrucao = 
    `
    SELECT COUNT(idCurtidasPublicacao) AS qtdCurtidas, fkPublicacao FROM curtidasPublicacao	WHERE fkUsuario = ${fkUsuario}
	GROUP BY fkPublicacao
		ORDER BY qtdCurtidas DESC LIMIT 5; `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function curtirPost(fkUsuario, fkPublicacao ) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO curtidasPublicacao(fkUsuario, fkPublicacao) VALUES = (${fkUsuario}, ${fkPublicacao})`;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function descurtirPost(idPublicacao) {

    var instrucao = `
       DELETE FROM curtidasPublicacao WHERE fkPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}





module.exports = {
    PostsMaisCurtidas,
    curtirPost, 
    descurtirPost
};