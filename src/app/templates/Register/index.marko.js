// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/proj-base-cadastro-alunos$1.0.0/src/app/templates/Register/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link href=https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap rel=stylesheet><title>Alunos</title><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://code.jquery.com/jquery-3.5.1.slim.min.js integrity=sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script></head><body><div class=container><h1>Cadastro de Alunos</h1><a class=\"btn btn-primary\" href=/api/alunos>Listagem</a><br><form action=/api/alunos method=post><div class=form-group><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "></div><div class=form-group><input type=text name=nome class=form-control placeholder=\"Primeiro Nome\"" +
    marko_attr("value", data.nome) +
    "></div><div class=form-group><input type=email name=email class=form-control id=exampleFormControlInput1 placeholder=name@example.com" +
    marko_attr("value", data.email) +
    "></div><div class=form-group><select name=curso class=form-control id=exampleFormControlSelect1><option value selected disabled>Selecione o curso</option><option value=ads" +
    marko_attr("selected", data.curso == "ads") +
    ">Tecnólogo em ADS</option><option value=ipi" +
    marko_attr("selected", data.curso == "ipi") +
    ">Tec. em Informática para Internet</option><option value=qualidade" +
    marko_attr("selected", data.curso == "Qualidade") +
    ">Tec. em Gestão de Qualidade</option></select></div><button style=\"margin-right: 10pt\" class=\"btn btn-success\" type=submit>Salvar</button><button class=\"btn btn-danger\" type=reset>Cancelar</button></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/proj-base-cadastro-alunos$1.0.0/src/app/templates/Register/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
