const MongoClient = require('mongodb').MongoClient;
require('env2')('./config.env');

let mongoDB;

MongoClient.connect(process.env.DATABASE_URL, (err, db) => {
  if (err) throw (err);
  mongoDB = db;
});

const dbQueries = {};

dbQueries.findUser = (data, callback) => {
  mongoDB.collection('users').findOne({
    $or: [{
      username: data.username
    }, {
      email: data.email
    }]
  }, callback);
};

dbQueries.addUser = (data, callback) => {
  mongoDB.collection('users').insertOne(data, callback);
};

module.exports = dbQueries;
