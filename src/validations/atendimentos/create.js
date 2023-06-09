const {validate,Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        id_paciente:Joi.number().required(),
        data_atendimento:Joi.date().required(),
        observacao:Joi.string().required(),
    }),
});