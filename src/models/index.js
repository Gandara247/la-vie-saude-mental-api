const Pacientes = require("./Pacientes");
const Psicologos =require("./Psicologos");
const Atendimentos = require("./Atendimentos");

Atendimentos.belongsTo(Pacientes, {
    foreignKey: "id_paciente",
});

Atendimentos.belongsTo(Psicologos, {
    foreignKey: "id_paciente",
});



module.exports = {
    Pacientes,
    Psicologos,
    Atendimentos
};