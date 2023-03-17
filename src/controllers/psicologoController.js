const { Psicologos } = require("../models/index");
const bcrypt = require("bcryptjs");
const psicologoController = {
    listarPsicologo: async (req, res) => {
        const listarPsicologos = await Psicologos.findAll();
        res.status(200).json(listarPsicologos);
    },

    listarPsicologoID: async (req, res) => {
        try {
            const { id } = req.params
            const listarPsicologoPorId = await Psicologos.findByPk(id)
            if (!listarPsicologoPorId) {
                throw new Error("ID não encontrado")
            }
            res.status(200).json(listarPsicologoPorId)

        } catch (error) {
            return res.status(404).json(error.message)
        }

    },


    async cadastrarPsicologo(req, res) {
        const { nome, email, senha, apresentacao } = req.body;
        const novaSenha = bcrypt.hashSync(senha, 10);
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha: novaSenha,
            apresentacao,
        });

        res.status(201).json(novoPsicologo)
    },

    async deletarPsicologo(req, res) {
        try {
            const { id } = req.params;
            const linhasAfetadas = await Psicologos.destroy({ where: { id } });
            if (linhasAfetadas === 0) {
                res.status(404).json({ message: 'Psicologo não encontrado.' });
            } else {
                res.json({ message: 'Psicologo deletado!' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno no servidor.' });
        }
    },

    async atualizarPsicologo(req, res) {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;
        if (!id) return res.status(400).json("id não ")
        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha,
            apresentacao,
        },
            {
                where: {
                    id,
                },
            })
        res.status(200).json("Dados atualizados!")
    },
};

module.exports = psicologoController;