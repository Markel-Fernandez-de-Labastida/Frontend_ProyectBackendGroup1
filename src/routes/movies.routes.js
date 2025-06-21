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

const router = Router();

router.get('/movies', getAllMovies);
router.get('/editmovie/:id', editMovieView)
router.post("/removemovie", deleteMovie);


router.get('/createmovie', createMovieView);
router.post("/createmovie", addMovie);
router.put("/editmovie/:id", updateMovie);
router.delete("/deletefavorites", deleteFavorites);


module.exports = router;
