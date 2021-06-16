const { Schema } = require("mongoose");

const todoSchema = new Schema({
  _id: "String",
  folder: "String",
  tasks: [{
    _id: "String",
    title: "String",
    done: "boolean"
  }],
});

module.exports = todoSchema;
