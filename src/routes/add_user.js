const MongoClient = require('mongodb').MongoClient;

module.exports = (req) => {
  MongoClient.connect(process.env.DATABASE_URL, (err, db) => {
    if (err) return console.log(err);

    return db.collection('users').insertOne({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }, (error) => {
      if (error) return console.log(error);
      return db.close();
    });
  });
};
