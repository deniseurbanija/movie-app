(function () {
  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll("input");
  const movieData = {};

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let allFieldsCompleted = true;

    inputs.forEach((input) => {
      if (!input.value) {
        allFieldsCompleted = false;
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
        form.classList.add("was-validated");

        if (input.type === "checkbox") {
          if (input.checked) {
            if (!movieData.genre) {
              movieData.genre = [];
            }
            movieData.genre.push(input.value);
          }
        }
        movieData[input.id] = input.value;
      }
    });

    if (allFieldsCompleted) {
      alert("movie added");
      try {
        const res = await axios.post("http://localhost:3000/movies", movieData);
        console.log("movie added", res.data);
      } catch (error) {
        console.error("Error adding movie:", error);
      }
    }
  });
})();
