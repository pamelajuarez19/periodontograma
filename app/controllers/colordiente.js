const db = require('../models');
const colordiente = db.colordiente;
const Op = db.Sequelize.Op;

// crear y guardar un nuevo registro
    exports.create = (req, res) => {
        // Validar solicitud
        if (!req.body.descripciondolordiente) {
          res.status(400).send({
            message: res
          });
          return;
        }
      
        // Crear ,
        const colordientes = {
            descripciondolordiente: req.body.descripciondolordiente
        };
      
        // Guardar colordientes en la base de datos el registro
        colordiente .create(colordientes)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Se produjo un error al crear el registro "
            });
          });
      };
      

    


     // Recupera todos los Checkin  de la base de datos.
     exports.muestratodo = (req, res) => {
        const title = req.query.title;
        var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
      
        colordiente.findAll({where: condition})
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Se produjo un error al recuperar los Checkin ."
            });
          });
      };