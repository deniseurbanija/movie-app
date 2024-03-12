const renderCards = require("./renderCards");
const axios = require("axios");

const fetchData = async () => {
  try {
    const movies = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    return movies.data;
  } catch (error) {
    console.error(error);
    throw Error;
  }
};

fetchData()
  .then((data) => renderCards(data))
  .catch((error) =>
    console.error("Hubo un error al obtener los datos:", error)
  );
