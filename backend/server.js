const express = require('express');
var cors = require('cors');
const mongooes = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

const uri = process.env.MONGODB_URI;
mongooes.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongooes.connection;
connection.once('open', () => {
    console.log("MongoDB connection established!");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})