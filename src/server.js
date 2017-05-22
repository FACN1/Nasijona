const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname:'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send('home');
})

module.exports = app
