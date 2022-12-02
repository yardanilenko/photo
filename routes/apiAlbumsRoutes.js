const express = require('express');
const route = express.Router();
const {Album, Access} = require('../db/models/index');

route.post('/api/albums', async (req, res) => {
    const {albumName, isPublic, usersId} = req.body;
    const userID = req.session.userID;
    try {
        const {id} = await Album.create({name: albumName, isPublic, user_id: userID});
        if (!isPublic && usersId && usersId.length) {
            const accesses = usersId.map(item => ({
                album_id: id,
                user_id: item,
            }))
            await Access.bulkCreate(accesses);
        }
        res.json({
            albumID: id,
        });
    } catch (error) {
        res.status(500).json({error});
    }
});

module.exports = route;