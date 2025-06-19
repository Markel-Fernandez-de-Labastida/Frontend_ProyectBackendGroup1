const {Router} = require('express');

const router = Router();

router.get('/createMovie', (req, res) => {
    res.render('admin/createMovie')
})

router.get('/editMovie', (req, res) => {
    res.render('admin/editMovie', {
        title: 'Spiderman',
        director: 'Sam Raimi',
        genre: 'action',
        duration: '2h',
        year_movie: 2002,
        synopsys: 'Tras la muerte de sus padres',
        image_url: 'image'
    })
})

router.get('/movies', (req, res) => {
    res.render('admin/movies', {
        title: 'Spiderman',
        director: 'Sam Raimi',
        genre: 'action',
        duration: '2h',
        year_movie: 2002,
        image_url: 'image'
    })
})

module.exports = router