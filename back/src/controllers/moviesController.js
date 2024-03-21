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
      const { title, year, duration, director, genre, rate, poster } = req.body;
      await moviesService.addMovie({
        title,
        year,
        duration,
        director,
        genre,
        rate,
        poster,
      });
      res.status(201)
    } catch (error) {
      res.status(500).json({
        error: "Server error",
      });
    }
  },
};
