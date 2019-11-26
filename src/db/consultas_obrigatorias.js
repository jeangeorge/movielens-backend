const Connection = require("./connection");

const consulta1 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT titulo_filme, ano_lancamento FROM filmes ORDER BY ano_lancamento DESC, titulo_filme ASC",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const consulta2 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT nome_genero, count(*) AS filmes FROM generos NATURAL JOIN filme_genero NATURAL JOIN filmes GROUP BY nome_genero ORDER BY nome_genero ASC;",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const consulta3 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT DISTINCT(titulo_filme), ano_lancamento FROM palavras_chave NATURAL JOIN filmes WHERE palavra_chave_texto LIKE '%comedy%' ORDER BY ano_lancamento DESC, titulo_filme ASC",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const consulta4 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT DISTINCT(login) FROM avaliacoes NATURAL JOIN usuarios WHERE data_avaliacao > '1999-12-31 23:59:59' ORDER BY login ASC",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const consulta5 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT DISTINCT(titulo_filme) FROM filme_genero NATURAL JOIN filmes NATURAL JOIN generos WHERE nome_genero = 'Fantasia' ORDER BY titulo_filme ASC",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const consulta6 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT DISTINCT(titulo_filme) FROM filmes NATURAL JOIN filme_genero NATURAL JOIN generos NATURAL JOIN avaliacoes WHERE nome_genero = 'Romance' AND nota = (SELECT MAX(nota) FROM avaliacoes) ORDER BY titulo_filme",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const consulta7 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT titulo_filme AS 'Titulo do Filme',nome_genero AS 'Gênero',nota AS Nota  FROM avaliacoes NATURAL JOIN filmes NATURAL JOIN filme_genero NATURAL JOIN generos WHERE nota = (SELECT MIN(nota) FROM avaliacoes)",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const consulta8 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT titulo_filme,ano_lancamento,nome_genero,palavras_chave.palavra_chave_texto AS palavra_chave FROM filmes NATURAL JOIN filme_genero NATURAL JOIN generos INNER JOIN (SELECT * FROM palavras_chave WHERE palavra_chave_texto LIKE '%oscar%') AS palavras_chave ON filmes.id_filme = palavras_chave.id_filme ORDER BY ano_lancamento DESC, titulo_filme ASC,nome_genero ASC",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const consulta9 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT titulo_filme, COUNT(*) AS total_avaliacoes, AVG(nota) AS media_avaliacoes FROM filmes NATURAL JOIN avaliacoes GROUP BY id_filme HAVING total_avaliacoes > 100  ORDER BY media_avaliacoes DESC, total_avaliacoes DESC, titulo_filme ASC",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const consulta10 = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      "SELECT titulo_filme, COUNT(*) AS total_palavras_chave FROM palavras_chave NATURAL JOIN filmes GROUP BY id_filme ORDER BY total_palavras_chave DESC, titulo_filme ASC",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

module.exports = {
  consulta1,
  consulta2,
  consulta3,
  consulta4,
  consulta5,
  consulta6,
  consulta7,
  consulta8,
  consulta9,
  consulta10
};
