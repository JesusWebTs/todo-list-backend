require("dotenv").config();
const PRODUCTION = require("./evironments/production");
const DEVELOPMENT = require("./evironments/development");

const { NODE_ENV } = process.env;
let currentEnv = null;

if (NODE_ENV === "development") {
  currentEnv = DEVELOPMENT;
} else if (NODE_ENV === "production") {
  currentEnv = PRODUCTION;
} else {
  throw new Error(`[NODE_ENV: ERROR] Eviroment ${NODE_ENV} is not valid`);
}

module.exports = currentEnv;
