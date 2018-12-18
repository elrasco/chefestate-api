/**
 * AnnuncioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require('moment');

module.exports = {
  find: (req, res) => {
    Annuncio.find().then(annuncio => res.json(annuncio));
  },

  findOne: (req, res) => {
    Annuncio.find({ id: req.params.id }).then(annuncio => res.json(annuncio));
  },

  create: (req, res) => {
    const d = new Date();
    Annuncio.create({ status: 'CREATED', title: `annuncio ${moment(d).format('L')}:${moment(d).format('LT')}` })
      .fetch()
      .then(created => {
        res.send(created);
      });
  },

  update: (req, res) => {
    const { id, status, data, title } = req.body;
    let operation;
    const update = {};
    if (data) {
      update.data = data;
    }
    if (status) {
      update.status = status;
    }
    if (title) {
      update.title = title;
    }
    if (data) {
      operation = Annuncio.update({ id }, update).fetch();
    }
    operation.then(updated => res.send(updated));
  },
  destroy: (req, res) => {
    Annuncio.destroy(req.params.id).then(destroyed => {
      res.send(destroyed);
    });
  }
};
