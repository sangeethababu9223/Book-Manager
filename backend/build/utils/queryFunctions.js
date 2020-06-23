"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteData = exports.createData = void 0;

var _debug = _interopRequireDefault(require("debug"));

require("../models/connect");

var _booklists = require("../models/booklists");

const logger = (0, _debug.default)('dev');
const data = [{
  title: 'The Palace of Illusions',
  author: 'Chitra Banerjee Divakaruni',
  category: 'Mythology',
  ISBN: '0330458531'
}, {
  title: 'The Priory of the Orange Tree',
  author: 'Samantha Shannon',
  category: 'Fantasy',
  ISBN: 'ksjfhjf87767'
}];

const createData = async () => new Promise(resolve => {
  const stop = data.length;
  data.forEach(async (d, index) => {
    const {
      title,
      author,
      category,
      ISBN
    } = d;
    const m = (0, _booklists.BookLists)({
      title,
      author,
      category,
      ISBN
    });

    try {
      await m.save();
    } catch (err) {
      logger("error: ".concat(err.message));
    }

    if (index + 1 === stop) resolve();
  });
});

exports.createData = createData;

const deleteData = async () => new Promise(resolve => {
  const stop = data.length;
  data.forEach(async (d, index) => {
    const {
      title
    } = d;

    try {
      await _booklists.BookLists.deleteOne({
        title
      });
    } catch (err) {
      logger("error: ".concat(err.message));
    }

    if (index + 1 === stop) resolve();
  });
});

exports.deleteData = deleteData;