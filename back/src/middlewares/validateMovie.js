const validateMovie = (req, res, next) => {
  const { title, year, duration, director, genre, rate, poster } = req.body;
  if (
    !title ||
    typeof title !== "string" ||
    !year ||
    typeof year !== "number" ||
    !duration ||
    typeof duration !== "string" ||
    !director ||
    typeof director !== "string" ||
    !rate ||
    typeof rate !== "number" ||
    !poster ||
    typeof poster !== "string"
  ) {
    res.status(400).json({
      error: "Some data is missing",
    });
  }
  next();
};

module.exports = validateMovie;
