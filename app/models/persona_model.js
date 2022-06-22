module.exports = (sequelize, Sequelize) => {

    const persona = sequelize.define("persona", {

        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.INTEGER
        },
        dpi: {
            type: Sequelize.INTEGER
        },
        direccion: {
            type: Sequelize.STRING
        }
    });

    return persona;

};