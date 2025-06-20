const { Router } = require('express');
const router = Router();
router.get('/dashboard', (req, res) => {
    res.render('user/dashboard')
})

router.get('/header', (req, res) => {
    res.render('templates/header')
})

module.exports = router