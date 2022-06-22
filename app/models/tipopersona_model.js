module.exports = (sequelize, Sequelize) => {

    const tipopersona = sequelize.define("tipopersona", {

        tipopersona: {
            type: Sequelize.STRING
        }

    });

    return tipopersona;

};