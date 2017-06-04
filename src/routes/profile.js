module.exports = (req, res) => {
  console.log(req.query.u);

  res.render('profile', {
    title: 'Create Profile'
  });
};
