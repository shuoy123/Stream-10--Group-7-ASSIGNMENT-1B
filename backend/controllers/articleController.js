const Article = require("../models/article");
const asyncHandler = require("express-async-handler");

// get articles
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find();

  res.status(200).json(articles);
});

// create article
const createArticle = asyncHandler(async (req, res) => {
  if (req.body.title) {
    res.status(400);
    throw new Error("Not all fieds filled");
  }

  const article = await Article.create({
    title: req.body.title,
    author: req.body.author,
    journalname: req.body.journalname,
    published: req.body.published,
    volume: req.body.volume,
    number: req.body.number,
    doi: req.body.doi,
  });

  res.json(article);
});

module.exports = {
  getArticles,
  createArticle,
};
