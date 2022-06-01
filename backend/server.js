require("dotenv").config({ path: "./.env" });

const express = require("express");

const app = express();

const cors = require("cors");

//Creates links to model controllers

const paper = require("./controllers/paperController");

const connectDB = require("./db/conn");

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.post("./createPaper", paper.createOne);

// perform a database connection when server starts

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/", (req, res) => {
  res.send({ message: "we did it" });
});
