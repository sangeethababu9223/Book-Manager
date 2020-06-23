"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _queryFunctions = require("./queryFunctions");

(async () => {
  await (0, _queryFunctions.deleteData)();

  _mongoose.default.connection.close();
})();