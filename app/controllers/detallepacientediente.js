const db = require('../models');
const detallepacientediente = db.detallepacientediente;
const Op = db.Sequelize.Op;

// crear y guardar un nuevo registro
    exports.create = (req, res) => {
        // Validar solicitud
        if (!req.body.paciente) {
          res.status(400).send({
            message: res
          });
          return;
        }
      
        // Crear ,
        const detallepacientedientes = {
            paciente: req.body.paciente,
            diente: req.body.diente,
            faltante: req.body.faltante,
            implante: req.body.implante,
            movilidad: req.body.movilidad,
            pronosticoindividual: req.body.pronosticoindividual,
            furca: req.body.furca,
            margengingival: req.body.margengingival,
            profundidaddesondaje: req.body.profundidaddesondaje,
            canalizacion: req.body.canalizacion,
            corona: req.body.corona,
            relleno: req.body.relleno,
            colordiente: req.body.colordiente,
            sensibilidad: req.body.sensibilidad,
            retracciondeencia: req.body.retracciondeencia,
            caries: req.body.caries,
            infeccion: req.body.infeccion
        };
      
        // Guardar detallepacientediente en la base de datos el registro
        detallepacientediente .create(detallepacientedientes)
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
      
        detallepacientediente.findAll({where: condition})
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