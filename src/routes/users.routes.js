const { Router } = require("express");
const {
  addFavorite,
  getFavorite,
  dashboardView,
  getMovieTitle,
  searchView,
  movieDetailView,
} = require("../controllers/users.controllers");
const { validateJWT } = require("../middleware/verifyToken");

const router = Router();

/**
 * Rutas de las gestiones del usuario
 */
router.get('/dashboard', [validateJWT], dashboardView);
router.get('/search', [validateJWT], searchView)
router.post('/search', getMovieTitle);
router.get('/search/:id', movieDetailView)

router.get('/movies', [validateJWT], getFavorite);
router.post('/addfavorite', addFavorite);

module.exports = router;