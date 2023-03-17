const {Pacientes} = require("../models/index");
const pacienteController = {
    listarPaciente: async(req, res) => {
        const listarPacientes = await Pacientes.findAll();
        res.status(200).json(listarPacientes);
    },

    listarPacienteID: async (req, res) => {
        try{
            const {id} = req.params
        const listarPacientePorId = await Pacientes.findByPk(id)
        res.status(200).json(listarPacientePorId)

        } catch (error){
            return res.status(401).json("ID não encontrado")
        }        
           
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

        res.status(200).json(novoPaciente)
    },

    async deletarPaciente (req, res){
        try{
            const {id} = req.params;
        await Pacientes.destroy({
            where: {
                id,
            }
        });
        res.status(200).json("Deletado!")

        }catch(error) {
            return res.status(500).json("Deu ruim")
        }     
    },

    async atualizarPaciente (req, res){
        const {id} = req.params;
        const {nome, email, telefone, cpf, senha,} = req.body;
        if (!id) return res.status(400).json("id não enviado");
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
        res.status(200).json("Atualizado")
        
    },
};

module.exports = pacienteController;