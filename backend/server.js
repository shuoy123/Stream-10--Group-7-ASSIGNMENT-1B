const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json); // json parser
const path = require("path");

//import models

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

//import routes

const PORT = process.env.PORT || 5000;

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
