const router = require('express').Router();

router.get('/', require('./home.js'));
router.get('/register', require('./register.js'));

module.exports = router;
