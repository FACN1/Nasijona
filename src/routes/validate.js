const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.token;

  // verify jwt if it exists
  if (token) {
    return jwt.verify(token, process.env.SECRET, (err) => {
      if (err) return res.status(500).send('Error reading JWT.');

      // continue if verification is successful
      return next();
    });
  }

  // if jwt doesn't exist, display message to user
  return res.status(403).send('You need to log in to view this page.');
};
