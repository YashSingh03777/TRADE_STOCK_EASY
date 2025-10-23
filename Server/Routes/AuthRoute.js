const { Signup, Login, userVerification } = require('../Controllers/AuthController');
const router = require('express').Router();

// Routes
router.post('/signup', Signup);
router.post('/login', Login);
router.post('/', userVerification);  // now userVerification is defined

module.exports = router;
