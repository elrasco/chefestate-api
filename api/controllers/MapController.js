/**
 * MapController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios');
const API_KEY = 'AIzaSyDVWiooeVEyP5CKwEOWORp-N9GDP3tBy68';
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?location=45.464211,9.191383&radius=20000&strictbounds&input=';

module.exports = {
  cities: (req, res) => {
    const { input } = req.query;
    axios
      .get(`${BASE_URL}${input}&types=(cities)&language=it&key=${API_KEY}`)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        res.serverError(error);
      });
  },
  address: (req, res) => {
    const { input } = req.query;
    axios
      .get(`${BASE_URL}${input}&types=address&language=it&key=${API_KEY}`)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        res.serverError(error);
      });
  }
};
