const router = require('express').Router();

router.get('/', require('./home.js'));
router.get('/register', require('./register.js'));
router.post('/add-user', require('./add_user.js'));

module.exports = router;
