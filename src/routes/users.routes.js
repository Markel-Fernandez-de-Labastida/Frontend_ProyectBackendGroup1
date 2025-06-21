const { Router } = require("express");
const {
  addFavorite,
  getFavorite,
  dashboardView,
  getMovieTitle,
  searchView,
  movieDetailView
} = require("../controllers/users.controllers");

const router = Router();

router.get('/dashboard', dashboardView);
router.get('/search', searchView)
router.post('/search', getMovieTitle);
router.get('/search/:id', movieDetailView)

router.post('/addfavorite', addFavorite);
router.get('/getfavorite', getFavorite);

module.exports = router;