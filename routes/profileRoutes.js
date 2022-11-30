const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const Profile = require('../views/Profile');

route.get('/profile', (req, res) => {
    render(Profile, {isHideOwners: true}, res)
})

module.exports = route;