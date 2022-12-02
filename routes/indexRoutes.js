const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const Index = require('../views/Index');
const {Album, User} = require("../db/models");

route.get('/', async (req, res) => {
    const albums = await Album.findAll({
        attributes: ['name', 'id', 'preview_id'],
        where: {
            isPublic: true,
        },
        include: [
            {model: User, attributes: ['name']}
        ],
    });
    render(Index, {albums}, res);
});

module.exports = route;
