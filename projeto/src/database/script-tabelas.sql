CREATE DATABASE livros;

USE livros;

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
dataNascimento DATE,
genero VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);


CREATE TABLE Publicacao(
idPublicacao INT  AUTO_INCREMENT,
texto VARCHAR(255),
dataPublicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
    PRIMARY KEY (idPublicacao, fkUsuario)
);

CREATE TABLE Fotos(
idFotoLivro INT PRIMARY KEY AUTO_INCREMENT, 
nome VARCHAR(45),
caminhoImagem VARCHAR(300),
fkUsuario INT, 
	FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
fkPublicacao INT,
	FOREIGN KEY (fkPublicacao) REFERENCES Publicacao (idPublicacao)
);

CREATE TABLE CurtidasPublicacao(
idCurtidasPublicacao INT AUTO_INCREMENT,
fkUsuario INT, 
	FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
fkPublicacao INT,
	FOREIGN KEY (fkPublicacao) REFERENCES publicacao (idPublicacao),
    PRIMARY KEY (idCurtidasPublicacao, fkUsuario, fkPublicacao)
);

CREATE TABLE Comentario(
idComentario INT  AUTO_INCREMENT,
texto VARCHAR(255),
dataPublicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP, /* pega a data atualque foi feito*/
fkUsuario INT, 
	FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
fkPublicacao INT,
	FOREIGN KEY (fkPublicacao) REFERENCES Publicacao (idPublicacao),
    PRIMARY KEY (idComentario, fkUsuario, fkPublicacao)
);
