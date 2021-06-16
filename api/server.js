const express = require("express");
const cors = require("cors");
class Server {
  _app;
  constructor({ router, config }) {
    this._router = router;
    this._config = config;
    this._app = express();
    this._app.use(express.json());
    this._app.use(cors());
    this._app.use(router);
  }
  start() {
    return new Promise((resolve, reject) => {
      const http = this._app.listen(
        this._config.PORT,
        this._config.HOST,
        () => {
          const { port, address } = http.address();
          console.log(`Server ${address} is started on port ${port}`);
          resolve();
        }
      );
    });
  }
}
module.exports = Server;
