"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _settings = require("../settings");

/* eslint-disable no-console */
_dotenv.default.config();

(async () => {
  try {
    await _mongoose.default.connect(_settings.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected');
  } catch (err) {
    console.error("Error ".concat(err.message));
  }
})();