module.exports = (sequelize, Sequelize) => {

    const enfermedades =sequelize.define("enfermedades", {

        descripcionenfermedad: {
            type: Sequelize.STRING
        }

    });

    return enfermedades;

};