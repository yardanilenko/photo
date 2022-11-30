const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const UploadPhoto = require('../views/UploadPhoto');

route.get('/upload', (req, res) => {
    render(UploadPhoto, {}, res)
})

module.exports = route;