module.exports = (sequelize, Sequelize) => {

    const dentista = sequelize.define("dentista", {

        especialidad: {
            type: Sequelize.STRING
        },
        nombreclinica: {
            type: Sequelize.STRING
        },
        persona: {
            type: Sequelize.INTEGER
        }
    });

    return dentista;

};