module.exports = (sequelize, Sequelize) => {

    const usuario = sequelize.define("usuario", {

        usuario: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.INTEGER
        },
        persona: {
            type: Sequelize.INTEGER
        },
        tipo: {
            type: Sequelize.INTEGER
        }

    });

    return usuario;

}