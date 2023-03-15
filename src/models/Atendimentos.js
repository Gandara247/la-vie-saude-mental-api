const db = require("../database");
const {DataTypes} = require("sequelize");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define("Atendimentos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento: {
        type: DataTypes.DATE,
        
    },
    valor_consulta:{
        type: DataTypes.DECIMAL(10,2)
    },
    id_psicologo:{
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            key: "id"
        },        
    },
    id_paciente:{
        type: DataTypes.INTEGER,
        references: {
            model: Pacientes,
            key: "id"
        },
    }, 
    createdAt:{
        type: DataTypes.DATE
    }, 
    updatedAt:{
        type: DataTypes.DATE
    },    

}, {
    tableName: "atendimento",
});

module.exports= Atendimentos;
