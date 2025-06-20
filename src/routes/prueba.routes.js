const {Router} = require('express');

const router = Router();

router.get('/createMovie', (req, res) => {
    res.render('admin/createMovie')
})

router.get('/editMovie', (req, res) => {
    res.render('admin/editMovie', {
        id_movie: 1,
        title: 'Spiderman',
        director: 'Sam Raimi',
        genre_id: 'action',
        duration: '2h',
        year_movie: 2002,
        synopsis: 'Tras la muerte de sus padres, Peter Parker, un tímido estudiante, vive con su tía May y su tío Ben. Precisamente debido a su retraimiento no es un chico muy popular en el instituto. Un día le muerde una araña que ha sido modificada genéticamente; a la mañana siguiente, descubre estupefacto que posee la fuerza y la agilidad de ese insecto. Las aventuras del hombre araña se basan en el famoso cómic de Stan Lee y Steve Ditko.',
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
        synopsis: 'Tras la muerte de sus padres, Peter Parker, un tímido estudiante, vive con su tía May y su tío Ben. Precisamente debido a su retraimiento no es un chico muy popular en el instituto. Un día le muerde una araña que ha sido modificada genéticamente; a la mañana siguiente, descubre estupefacto que posee la fuerza y la agilidad de ese insecto. Las aventuras del hombre araña se basan en el famoso cómic de Stan Lee y Steve Ditko.',
        image_url: 'image'
    })
})

router.get('/search/:title', (req, res) => {
    res.render('user/movieDetail', {
        title: 'Spiderman',
        director: 'Sam Raimi',
        genre: 'action',
        duration: '2h',
        year_movie: 2002,
        image_url: 'image'
    })
})

module.exports = router