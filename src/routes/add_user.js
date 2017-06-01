const MongoClient = require('mongodb').MongoClient;
const dbQueries = require('../db_queries.js');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  MongoClient.connect(process.env.DATABASE_URL, (err, db) => {
    if (err) return res.status(500).send('Database error. Please try again.');

    const data = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    };

    return dbQueries.addUser(db, data, (error) => {
      if (!error) return res.status(500).send('Database error. Please try again.');
      db.close();
      return res.send('New user added to DB');
    });
  });
};
