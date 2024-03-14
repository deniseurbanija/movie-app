const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateMovie = require("../middlewares/validateMovie");

const router = Router();

router.get("/movies", moviesController.getAllMovies);
router.post("/movies", validateMovie, moviesController.postMovie);

module.exports = router;
