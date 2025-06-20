const { Router } = require("express");
const {
  getAllMovies,
  getMovieTitle,
  addMovie,
  deleteFavorites,
  deleteMovie,
  updateMovie,
  getMovieId,
  createMovie,
} = require("../controllers/movies.controllers");

const router = Router();

// router.post("/dashboard", getAllMovies);
router.get("/searchId", getMovieId);
router.get("/search", getMovieTitle);
router.get('/createmovie', createMovie);
router.post("/createmovie", addMovie);
router.put("/editMovie/:id", updateMovie);
router.delete("/deleteFavorites", deleteFavorites);
router.delete("/removeMovie", deleteMovie);

module.exports = router;
