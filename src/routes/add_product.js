const dbQueries = require('../db_queries.js');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const data = {
    username: jwt.decode(req.cookies.token).username,
    product: req.body.product,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  };

  // add to products collection
  dbQueries.addProduct(data, (err, result) => {
    if (err) return res.status(500).send('Database error.');

    // add new product id to data
    data.id = result.ops[0]._id;

    return dbQueries.addUserProduct(data, (error) => {
      if (error) return res.status(500).send('Database error.');
      return res.send('Success');
    });
  });
};
