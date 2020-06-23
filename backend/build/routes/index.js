"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var _middleware = require("../middleware");

const indexRouter = _express.default.Router();

indexRouter.get('/', _controllers.indexPage);
indexRouter.get('/books', _middleware.modifyMessage);
indexRouter.post('/books', _controllers.addBook);
var _default = indexRouter;
exports.default = _default;