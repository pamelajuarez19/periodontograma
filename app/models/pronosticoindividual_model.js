module.exports = (sequelize, Sequelize) => {

    const pronosticoindividual = sequelize.define("pronosticoindividual", {

        descripcionpronosticoin: {
            type: Sequelize.STRING
        }

    });

    return pronosticoindividual;

};