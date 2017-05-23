const MongoClient = require('mongodb').MongoClient;
require('env2')('./config.env');

MongoClient.connect(process.env.DATABASE_URL, (err, db) => {
  if (err) return console.log(err);
  return db.createCollection('users', (createErr) => {
    if (createErr) return console.log(createErr);
    console.log('Table Created');
    return db.close();
  });
});
