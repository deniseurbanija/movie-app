const moviesService = require("../services/moviesService");
const catchAsync = require("../utils/catchAsync");

const getAllMovies = async (req, res) => {
  const movies = await moviesService.getMovies();
  res.status(200).json(movies);
};

const addMovie = async (req, res) => {
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
  res.status(201);
};

module.exports = {
  getAllMovies: catchAsync(getAllMovies),
  addMovie: catchAsync(addMovie),
};
