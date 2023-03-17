const {Pacientes} = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret")
const bcrypt = require("bcryptjs");

const AuthController = {
    async login(req, res){
     const {email, senha}  = req.body;
     const paciente = await Pacientes.findOne({
        where: {
            email,
        },
     });
     if(!paciente){
        return res.status(400).json("E-mail ou senha inválido, verifique e tente novamente")
     }
     if(!bcrypt.compareSync(senha, paciente.senha)){
        return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
     }

     const token = jwt.sign({
        id: paciente.id,
        email: paciente.email,
        nome: paciente.nome,
     },
     secret.key
     )
     return res.json(token);
    },
};

module.exports = AuthController;