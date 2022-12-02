const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const Profile = require('../views/Profile');
const {Album, Photo} = require('../db/models')

route.get('/profile', async (req, res) => {
    const nameCurrentUser = req.session?.nameCurrentUser
    const userID = req.session?.userID
    const albums = await Album.findAll({
        attributes: ['name', 'id', 'preview_id'],
        where: {
            user_id: userID
        },
    })
    if (nameCurrentUser) {
        render(Profile, {nameCurrentUser, albums, isHideOwners: true}, res)
    } else {
        res.redirect('/start')
    }
})

module.exports = route;