module.exports = (req, res) => {
  const text = req.cookies.token ? 'LOG OUT' : 'LOG IN';

  res.render('home', {
    loginStatus: text
  });
};
