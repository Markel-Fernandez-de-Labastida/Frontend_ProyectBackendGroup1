
const {Router} = require('express');
const { loginView, signupView, loginSend } = require('../controllers/auth.controllers');

const router = Router();

router.get('/', loginView);
router.post('/login', loginSend)
router.get('/signup', signupView);


module.exports = router;
