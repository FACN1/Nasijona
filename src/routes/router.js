const router = require('express').Router();
const auth = require('./validate.js');

router.post('/authenticate', require('./authenticate'));
router.get('/', auth, require('./home.js'));
router.get('/register', require('./register.js'));
router.get('/login', require('./login.js'));
router.get('/profile', require('./profile.js'));
router.post('/add-user', require('./add_user.js'));

module.exports = router;
