const {validate, joi, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email:Joi.string().email().required(),
        telefone:Joi.number().min(8).required(),
        cpf:Joi.number().min(11).required(),
        senha:Joi.string().min(6).required(),    
    }),
});