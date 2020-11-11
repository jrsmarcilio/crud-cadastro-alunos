//  Criando app express
const express = require("express");
const app = express();

const port = 3000;

// Configurações Marko Template
require("marko/node-require");
const markoExpress = require("marko/express");
app.use(markoExpress());

// Configurações Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Referenciando o DAO
const AlunoDao = require("./dao/alunoDao");
const dao = new AlunoDao();

// Configurações de Mensagens Flash
const flash = require("connect-flash");
const session = require("express-session"); // Configurações de Sessão
app.use(
  session({
    secret: "geeksforgeeks",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());

// Implementação das rotas . . .
const routes = express.Router();

routes.get("/alunos", (req, res) => {
  let response = {
    error_messages: req.flash("error"),
    success_messages: req.flash("success"),
    results: [],
  };

  dao
    .list()
    .then((results) => {
      response.results = results;
      res.marko(require("./templates/Listagem/index.marko"), response);
    })
    .catch((err) => {
      console.log(err);
      response.error_messages.push("Aconteceu algum erro no servidor");
      res.marko(require("./templates/Listagem/index.marko"), response);
    });
});

routes.post("/alunos", (req, res) => {
  if (req.body.id) {
    dao
      .update(req.body)
      .then(() => {
        req.flash("success", "Dados do aluno atualizado com sucesso.");
        res.redirect("/api/alunos");
      })
      .catch((err) => {
        console.log(err);
        req.flash(
          "error",
          `Ocorreu um erro ao atualizar os dados do aluno ${req.body.nome}`
        );
        res.redirect("/api/alunos");
      });
  } else {
    dao
      .save(req.body)
      .then(() => {
        req.flash("success", "Aluno salvo com sucesso.");
        res.redirect("/api/alunos");
      })
      .catch((err) => {
        console.log(err);
        req.flash("error", "Ocorreu um erro ao salvar os dados no servidor");
        res.redirect("/api/alunos");
      });
  }
});

routes.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  let aluno = dao
    .findById(id)
    .then((results) => {
      if (results.length === 0) {
        req.flash("error", `Não foi encontrado aluno com o id=${id}`);
        res.redirect("/api/alunos");
      }

      aluno = results[0];
      res.marko(require("./templates/Register/index.marko"), aluno);
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", `Ocorreu um erro ao buscar o aluno com o id=${id}`);
      res.redirect("/api/alunos");
    });
});

routes.get("/del/:id", (req, res) => {
  const id = req.params.id;
  dao
    .delete(id)
    .then(() => {
      req.flash("success", `O aluno de id=${id} foi removido com sucesso`);
      res.redirect("/api/alunos");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", `Ocorreu um erro ao remover o aluno de o id=${id}`);
      res.redirect("/api/alunos");
    });
});

routes.get("/form", (req, res) => {
  res.marko(require("./templates/Register/index.marko"));
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`API rodando na url http://localhost:${port}/api`);
});
