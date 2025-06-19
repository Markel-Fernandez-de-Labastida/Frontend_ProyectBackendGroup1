const { Router } = require(‘express’);
const router = Router();
router.get('/dashboard', (req, res) => {
    res.render('user/dashboard')
})

module.exports = router