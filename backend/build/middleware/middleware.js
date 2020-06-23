"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifyMessage = void 0;

const modifyMessage = (req, res, next) => {
  req.body.title = "SAYS: ".concat(req.body.title);
  next();
};

exports.modifyMessage = modifyMessage;