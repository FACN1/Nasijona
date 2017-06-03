const dbQueries = require('../db_queries.js');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };

  // check for username and email in DB
  dbQueries.findUser(data, (err, cursor) => {
    if (err) return res.status(500).send('Database error.');

    // send error message to user if matches are found
    if (cursor) {
      if (cursor.username === data.username) {
        return res.status(500).send('That username already exists.');
      } else if (cursor.email === data.email) {
        return res.status(500).send('That email is already in use.');
      }
    }

    // if no matches, add user to DB
    return dbQueries.addUser(data, (error) => {
      if (error) return res.status(500).send('Database error.');
      return res.send('New user added to DB');
    });
  });
};
