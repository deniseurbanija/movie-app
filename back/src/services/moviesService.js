const Movie = require("../models/Movie");

const getMovies = async () => {
  const movies = await Movie.find();
  return movies;
};

const addMovie = async (movie) => {
  const newMovie = await Movie.create(movie);
  return newMovie;
};

const deleteMovie = async (title) => {
  try {
    await Movie.findOneAndDelete({ title });
  } catch (error) {
    console.error("Error al eliminar película:", error);
    throw error;
  }
};

module.exports = {
  getMovies,
  addMovie,
  deleteMovie,
};

// const movies = [];

// class Movie {
//   constructor(title, year, duration, director, poster) {
//     this.title = title;
//     this.year = year;
//     this.duration = duration;
//     this.director = director;
//     this.poster = poster;
//   }
// }

// const movie = new Movie(
//   "2020 Force Works",
//   1997,
//   "2h 1min",
//   "George Lucas",
//   "https://cdn.marvel.com/u/prod/marvel/i/mg/a/90/5f5fc799434fe/standard_incredible.jpg"
// );

// postMovie: (title, year, duration, director, poster) => {
//   const movie = new Movie(title, year, duration, director, poster);
//   movies.push(movie);
//   return movie;
// },
