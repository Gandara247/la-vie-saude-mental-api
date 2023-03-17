const Pacientes = require("./Pacientes");
const Psicologos =require("./Psicologos");
const Atendimentos = require("./Atendimentos");

Atendimentos.belongsTo(Pacientes, {
    foreignKey: "id_paciente",
});

// Pacientes.hasMany(Atendimentos, {
//     foreignKey: "id_paciente",
// });

Atendimentos.belongsTo(Psicologos, {
    foreignKey: "id_psicologo",
});

// Psicologos.hasMany(Atendimentos, {
//     foreignKey: "id_psicologo",
// });



module.exports = {
    Pacientes,
    Psicologos,
    Atendimentos
};