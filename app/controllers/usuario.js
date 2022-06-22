const db = require('../models');
const usuario = db.usuario;
const Op = db.Sequelize.Op;

// crear y guardar un nuevo registro
    exports.create = (req, res) => {
        // Validar solicitud
        if (!req.body.usuario) {
          res.status(400).send({
            message: res
          });
          return;
        }
      
        // Crear ,
        const usuarioestructura = {
            usuario: req.body.usuario,
            password: req.body.password,
            persona: req.body.persona,
            tipo: req.body.tipo
        };
      
        // Guardar usuario en la base de datos el registro
        usuario .create(usuarioestructura)
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
      
        usuario.findAll({where: condition})
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