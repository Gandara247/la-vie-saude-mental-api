const express = require("express");
const pacienteController = require("../controllers/pacienteController");
const psicologoController = require("../controllers/psicologoController");
const atendimentoController = require("../controllers/atendimentoController");
const authController = require("../controllers/authController")
const pacienteValidation = require("../validations/pacientes/create")
const authLoginValidation = require("../validations/auth/login")
const routes = express.Router();

routes.get("/pacientes", pacienteController.listarPaciente);
routes.get("/pacientes/:id", pacienteController.listarPacienteID);
routes.post("/pacientes", pacienteValidation, pacienteController.cadastrarPaciente);
routes.post("/login", authLoginValidation, authController.login);
routes.delete("/pacientes/:id", pacienteController.deletarPaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);


routes.get("/psicologos", psicologoController.listarPsicologo);
// routes.get("/psicologos/:id", psicologoController.listarPsicologoID);
routes.post("/psicologos", psicologoController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologoController.deletarPsicologo);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologo);

routes.get("/atendimentos", atendimentoController.listarAtendimento);
// routes.get("/atendimentos/:id", atendimentoController.listarAtendimentoID);
routes.post("/atendimentos", atendimentoController.cadastrarAtendimento);
routes.delete("/atendimentos/:id", atendimentoController.deletarAtendimento);
routes.put("/atendimentos/:id", atendimentoController.atualizarAtendimento);


module.exports = routes;