const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("tarea", {
    uuid: {
        type: DataTypes.UUID,
        unique: true,
    },

    //nombre_tarea:{
    //     type:DataTypes.STRING(100),
    //     allowNull:false,
    //},

    descripcion_mensaje: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    //materiales:{
    //    type:DataTypes.STRING(100),
    //    allowNull:false,
    //},

    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    avance: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    //id_estado:{
    //    type:DataTypes.INTEGER,
    //    defaultValue:0,
    //},

    //id_prioridad:{
    //type:DataTypes.INTEGER,
    //defaultValue:0,
    //},

    //horas:{
    //    type:DataTypes.INTEGER,
    //    defaultValue:0,
    //},

    //costo:{
    //   type:DataTypes.INTEGER,
    //    defaultValue:0,
    //},
});