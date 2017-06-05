const dbQueries = require('../db_queries.js');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  if (!req.cookies.token) {
    return res.status(403).send('No token.');
  }

  const data = {
    username: jwt.decode(req.cookies.token).username,
    shop: req.body.shop,
    about: req.body.about,
    image: req.body.image
  };

  return dbQueries.addProfile(data, (error) => {
    if (error) return res.status(500).send('Database error.');
    return res.send(data.username);
  });
};
