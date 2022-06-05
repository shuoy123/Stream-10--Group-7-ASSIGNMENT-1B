const mongoose = require("mongoose");

//Card with name and view count

const articleSchema = new mongoose.Schema({
  title: {
    type: String,

    required: [true],
  },
  author: {
    type: String,

    required: [true],
  },
  journalname: {
    type: String,

    required: [true],
  },

  published: {
    type: Number,

    required: [true],
  },

  volume: {
    type: String,
    required: [true],
  },

  number: {
    type: Number,
    required: [true],
  },

  doi: {
    type: String,
    required: [true],
  },

  practice: {
    type: String,
    required: [true],
  },

  claim: {
    type: String,
    required: [true],
  },

  evidence: {
    type: String,
    required: [true],
  },
});

module.exports = mongoose.model("Article", articleSchema);
