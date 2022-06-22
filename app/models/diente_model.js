module.exports = (sequelize, Sequelize) => {

    const diente = sequelize.define("diente", {

        descripciondiente: {
            type: Sequelize.STRING
        }

    });

    return diente;

};