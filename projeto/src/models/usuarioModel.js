var database = require("../database/config")

function autenticar(email, senha) {
    var instrucao = `
        SELECT *  FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, dataNascimento, genero, email, senha ) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, dataNascimento, genero, email, senha) VALUES ('${nome}', '${dataNascimento}','${genero}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarFoto(fkUsuario, caminhoImagem) {

    var instrucao = `
    UPDATE fotos SET caminhoImagem = ${caminhoImagem} WHERE fkUsuario = ${fkUsuario};
`;
 console.log("Executando a instrução SQL: \n" + instrucao);
 return database.executar(instrucao);
}


function atualizarNome(idUsuario, nome) {
    
    var instrucao = `
    UPDATE usuario SET nome = ${nome} WHERE idUsuario = ${idUsuario};
`;
 console.log("Executando a instrução SQL: \n" + instrucao);
 return database.executar(instrucao);
}


module.exports = {
    autenticar,
    cadastrar,
    atualizarFoto,
    atualizarNome
};