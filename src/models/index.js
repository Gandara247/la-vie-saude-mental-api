const Pacientes = require("./Pacientes");
const Psicologos =require("./Psicologos");
const Atendimentos = require("./Atendimentos");

Atendimentos.hasMany(Pacientes, {
    foreignKey: "id_paciente",
});

Atendimentos.hasMany(Psicologos, {
    foreignKey: "id_psicologo",
});



module.exports = {
    Pacientes,
    Psicologos,
    Atendimentos
};