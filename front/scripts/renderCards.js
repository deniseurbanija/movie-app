const cardContainer = document.querySelector("#cardContainer");

const renderCards = (data) => {
  data.forEach((movie) => {
    const moviePoster = document.createElement("img");
    moviePoster.classList.add("poster");
    moviePoster.src = movie.poster;

    const movieTitle = document.createElement("a");
    movieTitle.classList.add("title");
    movieTitle.href = "";
    //textContent
    movieTitle.innerHTML = movie.title;

    const movieYear = document.createElement("p");
    movieYear.classList.add("year");
    movieYear.innerHTML = movie.year;

    const movieDuration = document.createElement("p");
    movieDuration.classList.add("duration");
    movieDuration.innerHTML = movie.duration;

    const info = document.createElement("div");
    info.classList.add("info");
    info.append(movieTitle, movieDuration, movieYear);

    const card = document.createElement("div");
    card.classList.add("card");

    card.append(moviePoster, info);
    cardContainer.appendChild(card);
  });
};

module.exports = renderCards;
