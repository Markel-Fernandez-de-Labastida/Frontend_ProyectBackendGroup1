
const {Router} = require('express');
const { loginView, signupView } = require('../controllers/auth.controllers');

const router = Router();

router.get('/', loginView);

router.get('/signup', signupView);


module.exports = router;
