const validateMovie = (req, res, next) => {
  const { title, year, duration, director, poster } = req.body;
  if (
    !title ||
    typeof title !== "string" ||
    !year ||
    typeof year !== "number" ||
    !duration ||
    typeof duration !== "string" ||
    !director ||
    typeof director !== "string" ||
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
