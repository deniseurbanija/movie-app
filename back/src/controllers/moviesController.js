const moviesService = require("../services/moviesService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        error: "Server error",
      });
    }
  },
  addMovie: async (req, res) => {
    try {
      const { title, year, duration, director, poster } = req.body;
      const newMovie = await moviesService.addMovie({title, year, duration, director, poster});
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({
        error: "Server error",
      });
    }
  },
};
