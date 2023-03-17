const { Psicologos } = require("../models/index");
const psicologoController = {
    listarPsicologo: async (req, res) => {
        const listarPsicologos = await Psicologos.findAll();
        res.json(listarPsicologos);
    },

    // listarPsicologoID: async (req, res) => {    
    //     const listarPsicologo = await Psicologos.findByPk();
    //     res.json(listarPsicologo);
    // },



    async cadastrarPsicologo(req, res) {
        const { nome, email, senha, cpf } = req.body;
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha,
            cpf,
        });

        res.status(200).json(novoPsicologo)
    },

    async deletarPsicologo(req, res) {
        try {
            const {id} = req.params;
            await Psicologos.destroy({
                where: {
                    id,
                }
            });
            res.status(204).json("Psicologo deletado!")

        }catch (error) {
            return res.status(500).json("Deu ruim")
        }
    },

    async atualizarPsicologo(req, res) {
        const { id } = req.params;
        const { nome, email, senha, cpf } = req.body;
        if (!id) return res.status(400).json("id não ")
        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha,
            cpf,
        },
            {
                where: {
                    id,
                },
            })
        res.status(204).json("Dados atualizados!")
    },
};

module.exports = psicologoController;