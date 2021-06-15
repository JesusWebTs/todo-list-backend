const { Router } = require("express");

module.exports = function (EntityController) {
  const router = Router();
  router.get("/base", EntityController.getAll);
  router.get("/base/:id", EntityController.get);
  router.post("/base/", EntityController.create);
  router.put("/base/:id", EntityController.update);
  router.delete("/base/:id", EntityController.delete);
  return router;
};
