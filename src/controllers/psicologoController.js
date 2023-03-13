const {Psicologos} = require("../models/index");
const psicologoController = {
    listarPsicologo: async(req, res) => {
        const listarPsicologos = await Psicologos.findAll();
        res.json(listarPsicologos);
    },

    async cadastrarPsicologo(req, res) {
        const {nome, email, senha, cpf} = req.body;
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha,
            cpf,            
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
        const {nome, email, senha, cpf} = req.body;
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
        res.json("Dados atualizados!")
    },
};

module.exports = psicologoController;