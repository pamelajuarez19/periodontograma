const db = require('../models');
const tipopersona = db.tipopersona;
const Op = db.Sequelize.Op;

// crear y guardar un nuevo registro
    exports.create = (req, res) => {
        // Validar solicitud
        if (!req.body.tipopersona) {
          res.status(400).send({
            message: res
          });
          return;
        }
      
        // Crear ,
        const tipopersonaestructura = {
            tipopersona: req.body.tipopersona
        };
      
        // Guardar tipopersona en la base de datos el registro
        tipopersona .create(tipopersonaestructura)
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
      
        tipopersona.findAll({where: condition})
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