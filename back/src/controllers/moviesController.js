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
  postMovie: async (req, res) => {
    try {
      const { title, year, duration, director, poster } = req.body;
      moviesService.postMovie(title, year, duration, director, poster);
      res.status(201).json({
        message: "Movie added correctly",
      });
    } catch (error) {
      // El middleware de validación manejará los errores de datos no válidos
      // Por lo tanto, aquí solo manejara otros tipos de errores, si los hay
      res.status(500).json({
        error: "Server error",
      });
    }
  },
};
