const handleFormSubmit = async (event) => {
  event.preventDefault(); // Evita el envío del formulario por defecto

  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll("input");
  let allFieldsCompleted = true;

  // Crear un objeto para almacenar los datos de la película
  const movieData = {};

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      allFieldsCompleted = false;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
      // Agregar el valor del input al objeto de datos de la película
      movieData[input.name] = input.value.trim();
    }
  });

  if (allFieldsCompleted) {
    try {
      // Realizar la solicitud POST utilizando Axios
      const response = await axios.post(
        "http://localhost:3000/movies",
        movieData
      );
      console.log("Película creada con éxito:", response.data);
      // Aquí puedes hacer cualquier otra acción que desees después de crear la película
    } catch (error) {
      console.error("Error al crear la película:", error);
      // Aquí puedes manejar cualquier error que ocurra durante la creación de la película
    }
  }
};

module.exports= handleFormSubmit;

