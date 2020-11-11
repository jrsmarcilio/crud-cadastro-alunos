const mysql = require("mysql2");

class AlunoDao {
  constructor() {
    this.connection = mysql.createConnection({
      host: "127.17.0.1",
      port: "3306",
      user: "root",
      password: "34544615",
      database: "crud_node",
    });
  }

  list() {
    return new Promise((resolve, reject) => {
      this.connection.query("SELECT * FROM alunos", (err, results) => {
        if (err) return reject(err);

        return resolve(results);
      });
    });
  }

  save(aluno) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `INSERT INTO alunos (nome, email, curso) VALUES ("${aluno.nome}", "${aluno.email}", "${aluno.curso}" )`,
        (err, results) => {
          if (err) return reject(err);

          return resolve(results);
        }
      );
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT * FROM alunos WHERE id=${id}`,
        (err, results) => {
          if (err) return reject(err);

          return resolve(results);
        }
      );
    });
  }

  update(aluno) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `UPDATE alunos SET nome="${aluno.nome}", email="${aluno.email}", curso="${aluno.curso}" WHERE id=${aluno.id}`,
        (err, results) => {
          if (err) return reject(err);

          return resolve(results);
        }
      );
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `DELETE FROM alunos WHERE id=${id}`,
        (err, results) => {
          if (err) return reject(err);

          return resolve(results);
        }
      );
    });
  }
}

module.exports = AlunoDao;
