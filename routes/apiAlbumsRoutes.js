const express = require('express');
const route = express.Router();
const {Album} = require('../db/models/indexmodels');

route.post('/api/albums', async (req, res) => {
    const {albumName, isPublic, usersId} = req.body;
    // const userId = req.session.userId;
    const userId = 1;
    try {
        const {id} = await Album.create({name: albumName, isPublic, user_id: userId});
        res.json({
            albumID: id,
        })
    } catch (error) {
        res.status(500).json({error});
    }
});

module.exports = route;