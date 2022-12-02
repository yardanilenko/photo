const express = require('express');
const path = require('path');

const route = express.Router();

const {Photo} = require('../db/models')


route.get('/photos/:id', async (req, res) => {
    const {id} = req.params

    const photo = await Photo.findOne({where:{id: id}})
    res.sendFile(path.join(__dirname, '/../uploads/', photo.storage_file_name))

});

module.exports = route;
