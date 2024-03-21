const express = require("express");
const router = require("./routes/moviesRoute");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//express error handler
app.use((err, req, res, next)=>{
    res.status(err.statusCode || 500).json({error: err.message})
})

app.use(router);

module.exports = app;
