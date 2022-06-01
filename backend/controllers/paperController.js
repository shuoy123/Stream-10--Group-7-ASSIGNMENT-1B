const mongoose = require("mongoose");
const Paper = require("../models/papers");

module.exports = {
  createOne: (req, res) => {
    console.log("We reached here");
    let newPost = req.body;
    newPost._id = new mongoose.Types.ObjectId();
    let paper = new Paper(newPost);

    paper.save((err) => {
      if (err) {
        return res.status(400).json(err);
      }

      res.json(post);
    });
  },
};
