const { Sequelize, DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    //defino el modelo
    sequelize.define(
        "user",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            mail: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            adress: {
                type: DataTypes.STRING,
            },
            points: {
                type: DataTypes.FLOAT,
                defaultValue: 0,
            },
        },
        { logging: false, timestamps: false }
    );
};
