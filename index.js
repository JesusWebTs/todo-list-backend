const container = require("./api/container");
const application = container.resolve("app");
const dbConnection = require("./dbConnect")

application
  .start()
  .then(async () => {
    return dbConnection()
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
