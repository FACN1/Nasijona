const dbQueries = require('../db_queries.js');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };

  return dbQueries.addUser(data, (err) => {
    if (err) return res.status(500).send('Database error. Please try again.');
    return res.send('New user added to DB');
  });
};
