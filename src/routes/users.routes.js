const { Router } = require("express");
const {
  addFavorite,
  getFavorite,
  dashboardView,
  getMovieTitle,
  searchView
} = require("../controllers/users.controllers");

const router = Router();

router.get('/dashboard', dashboardView);
router.get('/search', searchView)
router.post("/search", getMovieTitle);

router.post(`/addFavorite`, addFavorite);
router.get(`/getFavorite`, getFavorite);

module.exports = router;