const { Router } = require("express");
const {
  addFavorite,
  getFavorite,
  dashboardView,
} = require("../controllers/users.controllers");

const router = Router();

router.get('/dashboard', dashboardView);

router.post(`/addFavorite`, addFavorite);
router.get(`/getFavorite`, getFavorite);

module.exports = router;