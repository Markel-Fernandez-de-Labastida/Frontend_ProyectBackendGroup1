const { Router } = require("express");
const {
  getAllMovies,
  addMovie,
  deleteFavorites,
  deleteMovie,
  updateMovie,
  createMovieView,
  editMovieView,
} = require("../controllers/movies.controllers");
const { validateJWT } = require("../middleware/verifyToken");

const router = Router();

/**
 * Rutas de las gestiones de las películas
 */

router.get('/movies', [validateJWT], getAllMovies);
router.get('/editmovie/:id', [validateJWT], editMovieView);


router.post("/removemovie", deleteMovie);
router.get('/createmovie', [validateJWT], createMovieView);
router.post("/createmovie", addMovie);
router.put("/editmovie/:id", updateMovie);
router.delete("/deletefavorites", deleteFavorites);


module.exports = router;
