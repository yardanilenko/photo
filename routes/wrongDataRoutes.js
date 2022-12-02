const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const ErrorNamePassword = require('../views/ErrorNamePassword');

route.get('/', (req, res) => {
  render(ErrorNamePassword, {}, res);
});

module.exports = route;
