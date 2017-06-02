const router = require('express').Router();

router.get('/', require('./home.js'));
router.get('/register', require('./register.js'));
router.get('/profile', require('./profile.js'));
router.get('/sign-s3', require('./sign_s3'));

router.post('/add-user', require('./add_user.js'));

module.exports = router;
