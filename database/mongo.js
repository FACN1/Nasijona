const MongoClient = require('mongodb').MongoClient;
require('env2')('./config.env');

MongoClient.connect(process.env.DATABASE_URL, (err, db) => {
  if (err) return console.log(err);
  db.createCollection('users', (err, res) => {
    if (err) return console.log(err);
    console.log('Table Created');
    db.close();
  })
});
