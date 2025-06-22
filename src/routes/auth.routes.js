
const {Router} = require('express');
const { 
    loginView,
    signupView,
    loginSend,
    signupSend,
    logOutUser
} = require('../controllers/auth.controllers');

const router = Router();

/**
 * Rutas de autenticación
 */
router.get('/', loginView);
router.post('/login', loginSend);
router.get('/signup', signupView);
router.post('/register', signupSend);

router.post('/logout', logOutUser)


module.exports = router;
