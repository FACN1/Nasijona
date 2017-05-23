const express = require('express');
const hbs = require('express-handlebars');
const router = require('./routes/router.js');

const app = express();

app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(router);

app.use(express.static('public'));

module.exports = app;
