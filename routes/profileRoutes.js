const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const Profile = require('../views/Profile');

route.get('/profile', (req, res) => {
    console.log(req.session)
const nameCurrentUser = req.session?.nameCurrentUser
if (nameCurrentUser){
    render(Profile, {nameCurrentUser}, res)
} else {
    res.redirect('/start')
}
})

module.exports = route;