const dbQueries = {};

dbQueries.addUser = (db, data, callback) => {
  db.collection('users').insertOne(data, callback);
};

module.exports = dbQueries;
