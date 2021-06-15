module.exports = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  mongoDB: {
    host: process.env.HOST,
    dialect: "mongodb",
    dbName: process.env.DB_NAME,
    uri: process.env.DB_URI,
  },
};
