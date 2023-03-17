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

    listarAtendimentoID: async (req, res) => {
        try {
            const { id } = req.params
            const listarAtendimentoPorId = await Atendimentos.findByPk(id)
            if (!listarAtendimentoPorId) {
                throw new Error("ID não encontrado")
            }
            res.status(200).json(listarAtendimentoPorId)

        } catch (error) {
            return res.status(404).json(error.message)
        }

    },

    async cadastrarAtendimento(req, res) {
        const {id_paciente, data_atendimento, observacao, id_psicologo, } = req.body;
        const novoAtendimento = await Atendimentos.create({
            id_paciente,
            data_atendimento,
            observacao,
            id_psicologo,            
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
        const {id_paciente, data_atendimento, observacao, id_psicologo,}  = req.body;
        if (!id) return res.status(400).json("id não enviado");
        const atendimentoAtualizado = await Atendimentos.update({
            id_paciente,
            data_atendimento,
            observacao,
            id_psicologo,            
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