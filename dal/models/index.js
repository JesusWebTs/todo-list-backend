"use strict";
const mongoose = require("mongoose");
module.exports = {
  ["todo"]: require("./todo"),
  mongoose: mongoose,
};
