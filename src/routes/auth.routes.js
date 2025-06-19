
const {Router} = require('express');
const { 
    loginView,
    signupView,
    loginSend,
    signupSend,
    logOutUser
} = require('../controllers/auth.controllers');

const router = Router();

router.get('/', loginView);
router.post('/login', loginSend);
router.get('/signup', signupView);
router.post('/signed', signupSend);

router.post('/logout', logOutUser)


module.exports = router;
