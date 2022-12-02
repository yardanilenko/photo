const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const UploadPhoto = require('../views/UploadPhoto');

route.get('/upload', (req, res) => {
    // const { user } = req.session;
    // TODO get all albums => to template and render select album options
    render(UploadPhoto, {}, res)
})

module.exports = route;