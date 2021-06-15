const { TodoDTO } = require("../dtos");
const BaseController = require("./base.controller");

class ToDoController extends BaseController {
  constructor({ ToDoService }) {
    super(ToDoService, TodoDTO);
  }
  /* ToDo Own Controllers */
}
module.exports = ToDoController;
