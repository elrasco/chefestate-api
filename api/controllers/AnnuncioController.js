/**
 * AnnuncioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require('moment');

const ANNUNCIO_EMPTY = date => ({
  immobile: {
    planimetria: {
      dehor: {
        presente: 0
      },
      piani: []
    },
    cannaFumaria: false,
    cucinaCompleta: false,
    rate: -1
  },
  cucina: {},
  soldi: {},
  foto: [],
  status: 'CREATED',
  title: `annuncio ${moment(date).format('L')}:${moment(date).format('LT')}`
});

module.exports = {
  find: (req, res) => {
    Annuncio.find().then(annuncio => res.json(annuncio));
  },

  findOne: (req, res) => {
    Annuncio.findOne({ id: req.params.id }).then(annuncio => res.json(annuncio));
  },

  create: (req, res) => {
    Annuncio.create(ANNUNCIO_EMPTY(new Date()))
      .fetch()
      .then(created => {
        res.send(created);
      });
  },

  update: (req, res) => {
    const { id } = req.params;

    Annuncio.update({ id }, req.body)
      .fetch()
      .then(updated => res.send(updated));
  },
  destroy: (req, res) => {
    Annuncio.destroy(req.params.id).then(destroyed => {
      res.send(destroyed);
    });
  }
};
