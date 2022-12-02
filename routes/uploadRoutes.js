const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const UploadPhoto = require('../views/UploadPhoto');
const {Album} = require('../db/models')

route.get('/upload', async (req, res) => {
    // const { user } = req.session;
    // TODO get all albums => to template and render select album options
    const albums = await Album.findAll({
        attributes: ['name', 'id']
    })
    render(UploadPhoto, {albums}, res)
})

module.exports = route;