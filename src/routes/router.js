const router = require('express').Router();
const auth = require('./validate.js');

router.post('/authenticate', require('./authenticate'));
router.get('/', require('./home.js'));
router.get('/register', require('./register.js'));
router.get('/login', require('./login.js'));
router.get('/create', auth, require('./create.js'));
router.get('/sign-s3', require('./sign_s3'));
router.post('/add-user', require('./add_user.js'));
router.post('/add-profile', require('./add_profile.js'));
router.get('/profile', require('./profile'));

module.exports = router;
