const express = require("express");
const routes = express.Router();

const userControllers = require("./app/controllers/usersControllers");

routes.post("/alunos", userControllers.registro);
routes.get("/alunos", userControllers.listagem);

routes.get("/edit/:id", userControllers.edicaoGet);
routes.post("/edit/:id", userControllers.edicaoPost);

routes.get("/del/:id", userControllers.delete);

routes.get("/form", userControllers.getForm);

module.exports = (app) => app.use("/api", routes);
