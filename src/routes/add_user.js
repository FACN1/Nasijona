const MongoClient = require('mongodb').MongoClient;
require('env2')('./config.env');

module.exports = (req, res) => {
  MongoClient.connect(process.env.DATABASE_URL, (err, db) => {
    if (err) return console.log(err);

    return db.collection('users').insertOne({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }, (error, result) => {
      if (error) return console.log(error);
      console.log(result);
      return db.close();
    });
  });

  res.render('register', {
    title: 'Register'
  });
};
