const express = require("express");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");
const atendimentoController = require("../controllers/atendimentoController");
const routes = express.Router();

routes.get("/pacientes", pacienteController.listarPaciente);
routes.post("/pacientes", pacienteController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacienteController.deletarPaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);


routes.get("/psicologos", psicologoController.listarPsicologo);
// routes.get("/psicologos/:id", psicologoController.listarPsicologoID);
routes.post("/psicologos", psicologoController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologoController.deletarPsicologo);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologo);

routes.get("/atendimentos", atendimentoController.listarAtendimento);
routes.post("/atendimentos", atendimentoController.cadastrarAtendimento);
routes.delete("/atendimentos/:id", atendimentoController.deletarAtendimento);
routes.put("/atendimentos/:id", atendimentoController.atualizarAtendimento);


module.exports = routes;