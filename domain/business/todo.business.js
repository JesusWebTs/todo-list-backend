const BaseBusiness = require("./base.business");
const { ToDo } = require("../model");

class ToDoBusiness extends BaseBusiness {
  constructor({ ToDoRepository }) {
    super(ToDoRepository, ToDo);
  }
}

module.exports = ToDoBusiness;
