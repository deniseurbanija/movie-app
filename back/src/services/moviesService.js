const movies = [];

class Movie {
  constructor(title, year, duration, director, poster) {
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.director = director;
    this.poster = poster;
  }
}

const movie = new Movie(
  "2020 Force Works",
  1997,
  "2h 1min",
  "George Lucas",
  "https://cdn.marvel.com/u/prod/marvel/i/mg/a/90/5f5fc799434fe/standard_incredible.jpg"
);

movies.push(movie);

module.exports = {
  getMovies: () => {
    return movies;
  },
  postMovie: (title, year, duration, director, poster) => {
    const movie = new Movie(title, year, duration, director, poster);
    movies.push(movie);
    return movie;
  },
};
