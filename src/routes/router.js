const router = require('express').Router();

router.get('/', require('./home.js'));
router.get('/register', require('./register.js'));
router.get('/login', require('./login.js'));
router.get('/profile', require('./profile.js'));

router.post('/add-user', require('./add_user.js'));

module.exports = router;
