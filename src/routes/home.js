const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const loginStatus = req.cookies.token ? 'LOG OUT' : 'LOG IN';
  const user = req.cookies.token ? jwt.decode(req.cookies.token).username : null;

  res.render('home', {
    loginStatus,
    user
  });
};
