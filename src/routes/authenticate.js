const dbQueries = require('../db_queries.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password
  };

  // try to find user in DB
  dbQueries.findUser(data, (err, cursor) => {
    if (err) return res.status(500).send('Database error.');

    // if no match found send error message
    if (!cursor) {
      return res.status(500).send('Username doesn\'t exist in database.');
    }

    // check password
    if (!bcrypt.compareSync(data.password, cursor.password)) {
      return res.status(500).send('Incorrect password.');
    }

    // create and return JWT
    const token = jwt.sign(data, process.env.SECRET, { expiresIn: '1d' });
    return res.send(token);
  });
};
