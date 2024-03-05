console.log(tempData);

const cardContainer = document.querySelector(".cardContainer");

const convert = (tempData) => {
  const { poster, title, year, duration } = tempData;

  const moviePoster = document.createElement("img");
  moviePoster.classList.add("poster");
  moviePoster.src = poster;

  const movieTitle = document.createElement("a");
  movieTitle.classList.add("title");
  movieTitle.href = "";
  movieTitle.innerHTML = title;

  const movieYear = document.createElement("p");
  movieYear.classList.add("year");
  movieYear.innerHTML = year;

  const movieDuration = document.createElement("p");
  movieDuration.classList.add("duration");
  movieDuration.innerHTML = duration;

  const card = document.createElement("div");
  card.classList.add("card");
  card.append(moviePoster, movieTitle, movieDuration, movieYear);

  return card;
};

const arrayHTML = tempData.map((movie) => {
  return convert(movie);
});

arrayHTML.forEach((element) => {
  cardContainer.appendChild(element);
});
