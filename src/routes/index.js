const express = require("express");
const pacienteController = require("../controllers/pacienteController")
const routes = express.Router();

routes.get("/paciente/listar", pacienteController.listarPaciente);
routes.post("/paciente/cadastrar", pacienteController.cadastrarPaciente);
routes.delete("/paciente/:id/deletar", pacienteController.deletarPaciente);
routes.put("/paciente/:id/atualizar", pacienteController.atualizarPaciente);

module.exports = routes;