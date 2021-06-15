const mongoose = require("mongoose");
const { todoSchema } = require("../schemas");
const ToDoDBModel = mongoose.model("todo", todoSchema);

module.exports = ToDoDBModel;
