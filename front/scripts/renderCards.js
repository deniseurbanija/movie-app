const axios = require("axios");
const fetchData = require("./fetchData");
const cardContainer = document.querySelector("#cardContainer");

const renderCards = (data) => {
  data.forEach((movie) => {
    const moviePoster = document.createElement("img");
    moviePoster.classList.add("poster");
    moviePoster.src = movie.poster;

    const movieTitle = document.createElement("a");
    movieTitle.classList.add("title");
    movieTitle.href = "../pages/movieInfo.html";
    movieTitle.textContent = movie.title;

    const movieYear = document.createElement("p");
    movieYear.classList.add("year");
    movieYear.textContent = movie.year;

    const movieDuration = document.createElement("p");
    movieDuration.classList.add("duration");
    movieDuration.textContent = movie.duration;

    const info = document.createElement("div");
    info.classList.add("info");
    info.append(movieTitle, movieDuration, movieYear);

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("text-slate-500", "m-2");
    btnDelete.textContent = "X";
    btnDelete.dataset.id = movie.title;

    btnDelete.addEventListener("click", () => {
      axios
        .delete(`http://localhost:3000/movies/${movie.title}`)
        .then((response) => {
          console.log("Película eliminada:", response.data);
          cardContainer.removeChild(card);
        })
        .catch((error) => {
          console.error("Error al eliminar la película:", error);
        });
    });

    const card = document.createElement("div");
    card.classList.add("card");
    card.append(moviePoster, info, btnDelete);
    cardContainer.appendChild(card);
  });
};

module.exports = renderCards;
