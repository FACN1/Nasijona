const express = require('express');
const bodyParser = require('body-parser');
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

app.use(bodyParser.urlencoded({ extended: false })); // required to process post data
app.use(express.static('public'));
app.use(router);

module.exports = app;
