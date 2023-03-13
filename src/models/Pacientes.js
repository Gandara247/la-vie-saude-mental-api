const db = require("../database");
const {DataTypes} = require("sequelize");

const Pacientes = db.define("Pacientes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        
    },
    email:{
        type: DataTypes.STRING
    },
    telefone:{
        type: DataTypes.STRING
    },
    cpf:{
        type: DataTypes.STRING
    },
    
    senha:{
        type: DataTypes.STRING
    },
    
    createdAt:{
        type: DataTypes.DATE
    }, 
    updatedAt:{
        type: DataTypes.DATE
    },    

}, {
    tableName: "pacientes",
    timestamps: true,
});

module.exports= Pacientes;
