"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectionString = exports.testEnvironmentVariable = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv.default.config();

const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
exports.testEnvironmentVariable = testEnvironmentVariable;
const connectionString = process.env.CONNECTION_STRING.trim();
exports.connectionString = connectionString;