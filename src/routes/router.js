const router = require('express').Router();
const auth = require('./validate.js');

router.post('/authenticate', require('./authenticate'));
router.get('/', require('./home.js'));
router.get('/register', require('./register.js'));
router.get('/login', require('./login.js'));
router.get('/profile', auth, require('./profile.js'));
router.get('/sign-s3', require('./sign_s3'));
router.post('/add-user', require('./add_user.js'));

module.exports = router;
