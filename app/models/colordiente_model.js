module.exports = (sequelize, Sequelize) => {

    const colordiente = sequelize.define("colordiente", {

        descripciondolordiente: {
            type: Sequelize.STRING
        }

    });

    return colordiente;

};