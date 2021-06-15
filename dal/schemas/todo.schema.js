const { Schema } = require("mongoose");

const todoSchema = new Schema({
  folder: "String",
  tasks: [{
    title: "String",
    done: "boolean"
  }],
});

module.exports = todoSchema;
