const dbQueries = require('../db_queries.js');

module.exports = (req, res) => {
  dbQueries.getProfile(req.query.u, (err, cursor) => {
    if (err) return res.status(500).send('Database error.');

    return res.render('profile', {
      title: cursor.shop,
      about: cursor.about,
      image: cursor.image
    });
  });
};
