const express = require('express');

const router = express.Router();
const { renderStart, regUser, entryUser } = require('../controllers/startControllers');

// const render = require('../lib/render');
// const Start = require('../views/Start');

// route.get('/startpage', (req, res) => {
//   render(Start, {}, res)
//   })

// module.exports = route;

router
  .get('/', renderStart)
  .post('/register', regUser)
  .post('/entry', entryUser);
// .post('/entry', regUser)

module.exports = router;
