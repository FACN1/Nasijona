const express = require('express');
const hbs = require('express-handlebars');
const router = require('./routes/router.js');
const path = require('path');

const app = express();

app.engine('hbs', hbs({
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, '..', 'views', 'partials'),
  extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(router);

app.use(express.static('public'));

module.exports = app;
