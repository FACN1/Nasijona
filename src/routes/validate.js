module.exports = (req, res, next) => {
  console.log(req.cookies);
  return next();
};
