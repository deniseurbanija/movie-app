const moviesService = require("../services/moviesService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = moviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        error: "Server error",
      });
    }
  },
  createMovie: async (req, res) => {
    try {
      const { title, year, duration, director, poster } = req.body;
      moviesService.createMovie(title, year, duration, director, poster);
      res.status(201).json({
        message: "Movie added correctly",
      });
    } catch (error) {
      res.status(400).json({
        error: "Some information is missing",
      });
    }
  },
};
