// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/proj-base-cadastro-alunos$1.0.0/src/templates/Register/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_escapeScript = require("marko/src/runtime/html/helpers/escape-script-placeholder"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Alunos</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet></head><body><div class=container><div class=row><h1>Cadastro de Alunos</h1><hr></div><form class=\"col s12\" action=/api/alunos method=post><div class=row><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "></div><div class=row><div class=\"input-field col s12\"><input id=first_name class=\"nome validate\" type=text name=nome" +
    marko_attr("value", data.nome) +
    "><label for=first_name>Primeiro nome</label></div></div><div class=row><div class=\"input-field col s12\"><input type=email name=email id=email class=validate" +
    marko_attr("value", data.email) +
    "><label for=email>Email</label><span class=helper-text data-error=\"E-mail invalido\" data-success=\"E-mail valido\">Verificação</span></div></div><div class=row><label>Curso:</label><p><label><input name=curso type=radio value=ads" +
    marko_attr("checked", data.curso == "ads") +
    "><span>Tecnólogo em ADS</span></label></p><p><label><input name=curso type=radio value=api" +
    marko_attr("checked", data.curso == "api") +
    "><span>Tec. em Informática para Internet</span></label></p><p><label><input name=curso type=radio value=qualidade" +
    marko_attr("checked", data.curso == "qualidade") +
    "><span>Tec. em Gestão de Qualidade</span></label></p></div><div class=row><button style=\"margin-right: 10pt\" class=\"btn waves-effect waves-light\" type=submit name=action>Salvar <i class=\"material-icons right\">send</i></button><a href=/api/alunos class=\"btn waves-effect waves-light\">Cancelar</a></div></form></div>");

  marko_forOf(data.error_messages, function(message, index) {
    out.w("<script>" +
      marko_escapeScript(("\r\n        M.toast({html: \"" + message) + "\"})\r\n        ") +
      "</script>");
  });

  out.w("<script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "42");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/proj-base-cadastro-alunos$1.0.0/src/templates/Register/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
