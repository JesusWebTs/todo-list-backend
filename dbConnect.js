const container = require("./api/container");
const db = container.resolve("db");
const config = container.resolve("config");

async function dbConnection() {
  db.mongoose
    .connect(config.mongoDB.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      return console.log(
        `[MongoDB Info] DB: ${config.mongoDB.dbName} was connected successfully`
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
