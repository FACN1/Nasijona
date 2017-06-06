const dbQueries = require('../db_queries.js');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  dbQueries.getProfile(req.query.u, (err, cursor) => {
    if (err) return res.status(500).send('Database error.');

    if (!cursor) {
      return res.status(404).send('That profile doesn\'t exist.');
    }

    // if user is logged in and the owner of this profile
    let user = null;

    if (req.cookies.token) {
      if (req.query.u === jwt.decode(req.cookies.token).username) {
        user = req.query.u;
      }
    }

    return res.render('profile', {
      title: cursor.shop,
      about: cursor.about,
      image: cursor.image,
      user
    });
  });
};
