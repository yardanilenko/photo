const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const Foto = require('../views/Foto');

route.get('/foto', (req, res) => {
  render(Foto, { isHideOwners: true }, res);
});

module.exports = route;
