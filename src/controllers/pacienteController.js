const Pacientes = require("../models/Pacientes");
const pacienteController = {
    listarPaciente: async(req, res) => {
        const listarPacientes = await Pacientes.findAll();
        res.json(listarPacientes);
    },

    async cadastrarPaciente(req, res) {
        const {nome, email, telefone, cpf, senha} = req.body;
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            telefone,
            cpf,
            senha,
        });

        res.json(novoPaciente)
    },

    async deletarPaciente (req, res){
        const {id} = req.params;
        await Pacientes.destroy({
            where: {
                id,
            }
        });
        res.json("Paciente deletado!")
    },

    async atualizarPaciente (req, res){
        const {id} = req.params;
        const {nome, email, telefone, cpf, senha} = req.body;
        const pacienteAtualizado = await Pacientes.update({
            nome,
            email,
            telefone,
            cpf,
            senha,
        },
        {
            where: {
                id,
            },
        })
        res.json("Dados atualizados!")
    },
};

module.exports = pacienteController;