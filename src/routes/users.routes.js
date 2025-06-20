const { Router } = require("express");
const {
  addFavorite,
  getFavorite,
} = require("../controllers/users.controllers");

const router = Router();

router.post(`/addFavorite`, addFavorite);
router.get(`/getFavorite`, getFavorite);
