const {Psicologos} = require("../models/Psicologos");
const psicologoController = {
    listarPsicologo: async(req, res) => {
        const listarPsicologos = await Psicologos.findAll();
        res.json(listarPsicologos);
    },

    async cadastrarPsicologo(req, res) {
        const {nome, email, senha, cpf, id_psicologo} = req.body;
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha,
            cpf,
            id_psicologo,
        });

        res.json(novoPsicologo)
    },

    async deletarPsicologo (req, res){
        const {id} = req.params;
        await Psicologos.destroy({
            where: {
                id,
            }
        });
        res.json("Psicologo deletado!")
    },

    async atualizarPsicologo (req, res){
        const {id} = req.params;
        const {nome, email, senha, cpf, id_psicologo} = req.body;
        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha,
            cpf,
            id_psicologo,
        },
        {
            where: {
                id,
            },
        })
        res.json("Dados atualizados!")
    },
};

module.exports = psicologoController;