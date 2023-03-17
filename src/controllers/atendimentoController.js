const {Atendimentos, Pacientes, Psicologos} = require("../models/index");
const atendimentoController = {
    listarAtendimento: async(req, res) => {
        const listarAtendimentos = await Atendimentos.findAll({
                include: [{
                    model: Pacientes,
                    require: true
                },
                {
                    model: Psicologos,
                    require: true
                }
                ]
           
        });
        res.status(200).json(listarAtendimentos);
    },

    async cadastrarAtendimento(req, res) {
        const {data_atendimento, valor_consulta, id_psicologo, id_paciente} = req.body;
        const novoAtendimento = await Atendimentos.create({
            data_atendimento,
            valor_consulta,
            id_psicologo,
            id_paciente,
        });

        res.status(200).json(novoAtendimento)
    },

    async deletarAtendimento (req, res){
        try{
            const {id} = req.params;
        await Atendimentos.destroy({
            where: {
                id,
            }
        });
        res.status(200).json("Deletado!")

        }catch{
            return res.status(500).json("Deu ruim")
        }
        
    },

    async atualizarAtendimento (req, res){
        const {id} = req.params;
        const {data_atendimento, valor_consulta, id_psicologo, id_paciente}  = req.body;
        if (!id) return res.status(400).json("id não enviado");
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
        res.status(204).json("Dados atualizados!")
    },
};

module.exports = atendimentoController;;