require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const paper = require("./controllers/articleController");
const connectDB = require("./db/conn");
const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

//routes
app.use("/api/articles", require("./routes/articleRoutes"));

//app.post("./createPaper", paper.createOne);
app.get("/", (req, res) => {
  res.send({ message: "we did it" });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
