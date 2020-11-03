const mysql = require("../database/index").pool;

exports.registro = (req, res) => {
  try {
    const { nome, email, curso } = req.body;
    mysql.getConnection((error, conn) => {
      if (error) return res.status(500).send({ error: error });
      conn.query(
        `INSERT INTO alunos (nome, email, curso) VALUES ('${nome}', '${email}', '${curso}')`,
        (error, result) => {
          conn.release();
          if (error) return res.status(500).send({ error: error });
          return res.redirect("/api/alunos");
        }
      );
    });
  } catch (err) {
    return res.status(400).send({ err: "Criação de usuário falhou" });
  }
};

exports.listagem = (req, res) => {
  try {
    mysql.getConnection((error, conn) => {
      if (error) return res.status(500).send({ error: error });
      conn.query(`SELECT * FROM alunos;`, (error, data, _field) => {
        conn.release();
        if (error) return res.status(500).send({ error: error });
        return res.marko(require("../templates/Listagem/index.marko"), data);
      });
    });
  } catch (err) {
    return res.status(400).send({ err: "A listagem de usuários falhou" });
  }
};

exports.edicaoPost = (req, res) => {
  try {
    const { nome, email, curso } = req.body;
    const id = req.params.id;
    mysql.getConnection((error, conn) => {
      if (error) return res.status(500).send({ error: error });
      conn.query(
        `UPDATE alunos SET nome='${nome}', email='${email}', curso='${curso}' WHERE id=${id};`,
        (error, _result, _field) => {
          conn.release();
          if (error) return res.status(500).send({ error: error });
          return res.redirect("/api/alunos");
        }
      );
    });
  } catch (err) {
    return res.status(400).send({ err: "A edição do usuário falhou." });
  }
};

exports.edicaoGet = (req, res) => {
  try {
    const id = req.params.id;
    mysql.getConnection((error, conn) => {
      if (error) return res.status(500).send({ error: error });
      conn.query(
        `SELECT id, nome, email, curso FROM alunos WHERE id=${id};`,
        (error, data, _field) => {
          conn.release();
          if (error) return res.status(500).send({ error: error });
          const result = data.reduce((acc, cur) => Object.assign(acc, cur));

          return res.marko(require("../templates/Edita/index.marko"), result);
        }
      );
    });
  } catch (err) {
    return res.status(400).send({ err: "Carregamento das informações falhou" });
  }
};

exports.delete = (req, res) => {
  try {
    const id = req.params.id;
    mysql.getConnection((error, conn) => {
      if (error) return res.status(500).send({ error: error });
      conn.query(
        `DELETE FROM alunos WHERE id=${id};`,
        (error, data, _field) => {
          conn.release();
          if (error) return res.status(500).send({ error: error });
          return res.redirect("/api/alunos");
        }
      );
    });
  } catch (err) {
    return res.status(400).send({ err: "Erro ao deletar o usuário" });
  }
};

exports.getForm = (req, res) => {
  res.marko(require("../templates/Register/index.marko"));
};
