const { Router } = require('express');
const router = Router();
router.get('/dashboard', (req, res) => {
    res.render('user/dashboard')
})

router.get('/header', (req, res) => {
    res.render('templates/header')
})

router.get('/search', (req, res) => {
    res.render('user/movie-search', {
        movieResults: [{
            title: 'Spiderman',
            director: 'Sam Raimi',
            genre_id: 'action',
            duration: '2',
            year_movie: 2002,
            synopsis: 'Tras la muerte de sus padres, Peter Parker, un tímido estudiante, vive con su tía May y su tío Ben. Precisamente debido a su retraimiento no es un chico muy popular en el instituto. Un día le muerde una araña que ha sido modificada genéticamente; a la mañana siguiente, descubre estupefacto que posee la fuerza y la agilidad de ese insecto. Las aventuras del hombre araña se basan en el famoso cómic de Stan Lee y Steve Ditko.',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMabuRlRyoUvxcmZIbBV3fvajOZKAqcdr6w&s'
        },
        {
            title: 'Spiderman-2',
            director: 'Sam Raimi',
            genre_id: 'action',
            duration: '2',
            year_movie: 2010,
            synopsis: 'Tras la muerte de sus padres, Peter Parker, un tímido estudiante, vive con su tía May y su tío Ben. Precisamente debido a su retraimiento no es un chico muy popular en el instituto. Un día le muerde una araña que ha sido modificada genéticamente; a la mañana siguiente, descubre estupefacto que posee la fuerza y la agilidad de ese insecto. Las aventuras del hombre araña se basan en el famoso cómic de Stan Lee y Steve Ditko.',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWL2mlkaimmWp_LFD-gFaPQJnrQ-c6rUHbbg&s'
        }]


    })
})

module.exports = router