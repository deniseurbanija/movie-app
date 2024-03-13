const moviesService = require("../services/moviesService");

module.exports = {
  getAllMovies: async (req, res) => {
    const movies = moviesService.getMovies();

    res.json(movies);
  },
};
