const movies = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    title: "Superior Spider-Man Vol. 2: Otto-matic",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883/detail.jpg",
  },
  {
    title: "2020 Force Works",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/a/90/5f5fc799434fe/standard_incredible.jpg",
  },
];

class Movie {
  constructor(title, year, duration, director, poster) {
    if (!title || typeof title !== "string") {
      throw new Error("Title must be a non-empty string");
    }
    if (!year || typeof year !== "number") {
      throw new Error("Year must be a non-empty number");
    }
    if (!duration || typeof duration !== "string") {
      throw new Error("Duration must be a non-empty string");
    }
    if (!director || typeof director !== "string") {
      throw new Error("Director must be a non-empty string");
    }
    if (!poster || typeof poster !== "string") {
      throw new Error("Poster must be a non-empty string");
    }

    this.title = title;
    this.year = year;
    this.duration = duration;
    this.director = director;
    this.poster = poster;
  }
}

module.exports = {
  getMovies: () => {
    return movies;
  },
  createMovie: (title, year, duration, director, poster) => {
    const movie = new Movie(title, year, duration, director, poster);
    movies.push(movie);
    return movie;
  },
};
