const BaseService = require("./base.services");

class ToDoService extends BaseService {
  constructor({ ToDoBusiness }) {
    super(ToDoBusiness);
  }
}

module.exports = ToDoService;
