const { Router } = require("express");
const {
  getAllMovies,
  getMovieTitle,
  addMovie,
  deleteFavorites,
  deleteMovie,
  updateMovie,
  getMovieId,
  createMovieView,
} = require("../controllers/movies.controllers");

const router = Router();

// router.post("/dashboard", getAllMovies);
router.get('/movies', getAllMovies)
router.get("/searchId", getMovieId);
router.get("/search", getMovieTitle);
router.get('/createmovie', createMovieView);
router.post("/createmovie", addMovie);
router.put("/editMovie/:id", updateMovie);
router.delete("/deleteFavorites", deleteFavorites);
router.delete("/removeMovie", deleteMovie);

module.exports = router;
