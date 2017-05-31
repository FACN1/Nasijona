const MongoClient = require('mongodb').MongoClient;
const dbQueries = require('../db_queries.js');

module.exports = (req, res) => {
  MongoClient.connect(process.env.DATABASE_URL, (err, db) => {
    if (err) return console.log(err);

    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

    return dbQueries.addUser(db, data, (error) => {
      if (error) return console.log(error);
      db.close();
      return res.send('New user added to DB');
    });
  });
};
