const express = require('express');

const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const sessionConfig = {
  name: 'Photoalbum',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'kwefKEWNF3knNKWE43',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.nameCurrentUser = req.session?.nameCurrentUser;
  next();
});


//импорт вспомогательных ф-й

// импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');

const startRoutes = require('./routes/startRoutes')

const profileRoutes = require('./routes/profileRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const apiUploadRoutes = require('./routes/apiUploadRoutes');
const personAlbumRoutes = require('./routes/personAlbumRoutes');
const apiUsersRoutes = require('./routes/apiUsersRoutes');
const apiAlbumsRoutes = require('./routes/apiAlbumsRoutes');

// вызов функции проверки соединения с базоый данных
dbCheck();

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// роутеры
app.use('/', indexRoutes);

app.use('/start', startRoutes);
app.get('/logout', async (req, res) => {
  console.log(req.query);
  try {
    if (req.session.nameCurrentUser) {
      req.session.destroy(() => {
        res.clearCookie('Photoalbum');
        res.redirect('/start');
      });
    } else {
      res.redirect('/start');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

app.use((req, res, next) => {
  console.log('\n\x1b[33m', 'req.session.user :', req.session?.nameCurrentUser);
  res.locals.nameCurrentUser = req.session?.nameCurrentUser;
  next();
});

app.use('/', uploadRoutes);
app.use('/', apiUploadRoutes);
app.use('/', personAlbumRoutes);
app.use('/', apiUsersRoutes);
app.use('/', apiAlbumsRoutes);
app.use('/', profileRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
