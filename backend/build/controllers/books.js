"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBook = exports.booksPage = void 0;

var _booklists = require("../models/booklists");

const booksPage = async (req, res, next) => {
  try {
    // console.log(BookLists.find());
    const booklists = await _booklists.BookLists.find();
    res.status(200).json({
      booklists
    });
  } catch (err) {
    next(err);
  }
};

exports.booksPage = booksPage;

const addBook = async (req, res, next) => {
  const {
    title,
    author,
    category,
    ISBN
  } = req.body;

  try {
    const m = await (0, _booklists.BookLists)({
      title,
      author,
      category,
      ISBN
    }).save();
    res.status(201).json({
      success: true,
      title: m
    });
  } catch (err) {
    next(err);
  }
};

exports.addBook = addBook;