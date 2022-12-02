const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const NewAlbum = require('../views/NewAlbum');

route.get('/album', (req, res) => {
  render(NewAlbum, { isHideOwners: true }, res);
});

module.exports = route;
