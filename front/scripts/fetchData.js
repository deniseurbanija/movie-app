const renderCards = require("./renderCards");
const axios = require("axios");

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    renderCards(data);
  } catch (error) {
    console.error(error);
    throw Error;
  }
};

module.exports = fetchData;
