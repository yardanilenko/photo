const express = require('express');

const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

// импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');
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
app.use('/', profileRoutes);
app.use('/', uploadRoutes);
app.use('/', apiUploadRoutes);
app.use('/', personAlbumRoutes);
app.use('/', apiUsersRoutes);
app.use('/', apiAlbumsRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
