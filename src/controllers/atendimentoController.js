const {Atendimentos, Pacientes, Psicologos} = require("../models/index");
const atendimentoController = {
    listarAtendimento: async(req, res) => {
        const listarAtendimentos = await Atendimentos.findAll({
            include: Pacientes
        });
        res.json(listarAtendimentos);
    },

    async cadastrarAtendimento(req, res) {
        const {data_atendimento, valor_consulta, id_psicologo, id_paciente} = req.body;
        const novoAtendimento = await Atendimentos.create({
            data_atendimento,
            valor_consulta,
            id_psicologo,
            id_paciente,
        });

        res.json(novoAtendimento)
    },

    async deletarAtendimento (req, res){
        const {id} = req.params;
        await Atendimentos.destroy({
            where: {
                id,
            }
        });
        res.json("Atendimento deletado!")
    },

    async atualizarAtendimento (req, res){
        const {id} = req.params;
        const {data_atendimento, valor_consulta, id_psicologo, id_paciente}  = req.body;
        const atendimentoAtualizado = await Atendimentos.update({
            data_atendimento,
            valor_consulta,
            id_psicologo,
            id_paciente,
        },
        {
            where: {
                id,
            },
        })
        res.json("Dados atualizados!")
    },
};

module.exports = atendimentoController;;