const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

// middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routes/router.js');

const app = express();

app.engine('hbs', hbs({
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, '..', 'views', 'partials'),
  extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('public'));
app.use(router);

module.exports = app;
