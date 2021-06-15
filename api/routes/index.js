const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compresion = require("compression");
const morgan = require("morgan");

module.exports = function ({ todoRouter }) {
  const router = Router();
  const apiRouter = Router();

  apiRouter
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(compresion())
    .use(morgan("dev"));

  apiRouter.use("/test", (_, res) => {
    return res.json("Hello World");
  });

  apiRouter.use("/todo", todoRouter);

  router.use("/api", apiRouter);
  return router;
};
