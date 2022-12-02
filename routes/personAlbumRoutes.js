const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const PersonAlbum = require('../views/PersonAlbum');

route.get('/albums/:id', (req, res) => {
    render(PersonAlbum, {}, res);
});

module.exports = route;
