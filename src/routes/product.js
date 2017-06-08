const dbQueries = require('../db_queries.js');

module.exports = (req, res) => {
  const id = req.query.q;

  // get product info from DB
  dbQueries.getProduct(id, (error, result) => {
    if (error) return res.status(500).send('Database error.');

    return res.render('product', {
      title: result.product,
      category: result.category,
      description: result.description,
      price: result.price,
      image: result.image
    });
  });
};
