const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const ErrorUserFounded = require('../views/ErrorUserFounded');

route.get('/', (req, res) => {
  render(ErrorUserFounded, {}, res);
});

module.exports = route;
