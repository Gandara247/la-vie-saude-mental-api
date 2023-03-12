const db = require("../database");
const {DataTypes} = require("sequelize");

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
        type: DataTypes.INTEGER
    },
    id_paciente:{
        type: DataTypes.INTEGER
    }, 
    createdAt:{
        type: DataTypes.DATE
    }, 
    updatedAt:{
        type: DataTypes.DATE
    },    

}, {
    tableName: "atendimentos",
});

module.exports= Atendimentos;
