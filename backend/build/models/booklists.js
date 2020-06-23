"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookLists = void 0;

var _mongoose = require("mongoose");

const booklistsSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  ISBN: {
    type: String
  }
});
const BookLists = (0, _mongoose.model)('booklists', booklistsSchema);
exports.BookLists = BookLists;