const { Pacientes } = require("../models/index");
const pacienteController = {
    listarPaciente: async (req, res) => {
        const listarPacientes = await Pacientes.findAll();
        res.status(200).json(listarPacientes);
    },

    listarPacienteID: async (req, res) => {
        try {
            const { id } = req.params
            const listarPacientePorId = await Pacientes.findByPk(id)
            if (!listarPacientePorId) {
                throw new Error("ID não encontrado")
            }
            res.status(200).json(listarPacientePorId)

        } catch (error) {
            return res.status(404).json(error.message)
        }

    },

    async cadastrarPaciente(req, res) {
        const { nome, email, idade } = req.body;
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            idade,
        });

        res.status(201).json(novoPaciente)
    },

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;
            const linhasAfetadas = await Pacientes.destroy({ where: { id } });
            if (linhasAfetadas === 0) {
                res.status(404).json({ message: 'Paciente não encontrado.' });
            } else {
                res.json({ message: 'Paciente deletado!' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno no servidor.' });
        }
    },

    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const { nome, email, idade } = req.body;
        if (!id) return res.status(400).json("id não enviado");
        const pacienteAtualizado = await Pacientes.update({
            nome,
            email,
            idade,
        },
            {
                where: {
                    id,
                },
            })
        res.status(200).json("Atualizado")

    },
};

module.exports = pacienteController;