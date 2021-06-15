const { asClass, createContainer, asFunction, asValue } = require("awilix");
const container = createContainer();

// settings
const config = require("../config");

// app start
const StartUp = require("./startup");
const Server = require("./server");

// Routes
const router = require("./routes");

const todoRouter = require("./routes/todo.router");

// db
const db = require("../dal/models");

// Controllerss
const { ToDoController } = require("./controllers");

// Repositories
const { ToDoRepository } = require("../dal/repositories");

// Business
const { ToDoBusiness } = require("../domain/business");

// Services
const { ToDoService } = require("../service");

container
  .register({ config: asValue(config) })
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(router).singleton(),

    todoRouter: asFunction(todoRouter).singleton(),
  })
  .register({ db: asValue(db) })
  .register({
    ToDoController: asClass(ToDoController).singleton(),
  })
  .register({
    ToDoRepository: asClass(ToDoRepository).singleton(),
  })
  .register({
    ToDoService: asClass(ToDoService).singleton(),
  })
  .register({
    ToDoBusiness: asClass(ToDoBusiness).singleton(),
  });

module.exports = container;
