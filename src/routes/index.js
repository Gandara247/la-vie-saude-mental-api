const express = require("express");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");
const atendimentoController = require("../controllers/atendimentoController");
const routes = express.Router();

routes.get("/paciente/listar", pacienteController.listarPaciente);
routes.post("/paciente/cadastrar", pacienteController.cadastrarPaciente);
routes.delete("/paciente/:id/deletar", pacienteController.deletarPaciente);
routes.put("/paciente/:id/atualizar", pacienteController.atualizarPaciente);


routes.get("/psicologo/listar", psicologoController.listarPsicologo);
routes.post("/psicologo/cadastrar", psicologoController.cadastrarPsicologo);
routes.delete("/psicologo/:id/deletar", psicologoController.deletarPsicologo);
routes.put("/psicologo/:id/atualizar", psicologoController.atualizarPsicologo);

routes.get("/atendimento/listar", atendimentoController.listarAtendimento);
routes.post("/atendimento/cadastrar", atendimentoController.cadastrarAtendimento);
routes.delete("/atendimento/:id/deletar", atendimentoController.deletarAtendimento);
routes.put("/atendimento/:id/atualizar", atendimentoController.atualizarAtendimento);


module.exports = routes;