const BaseRouter = require("./base.router");

module.exports = function ({ ToDoController }) {
  const router = BaseRouter(ToDoController);
  return router;
};
