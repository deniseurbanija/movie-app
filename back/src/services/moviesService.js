const Movie = require("../models/Movie");

const getMovies = async () => {
  const movies = await Movie.find();
  console.log("estoy funcionando");
  return movies;
};

const addMovie = async (movie) => {
  const newMovie = await Movie.create(movie);
  return newMovie
};

module.exports = {
  getMovies,
  addMovie,
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
