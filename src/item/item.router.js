const { Router } = require("express");
const apiRouter = Router();
const { getAll, create,  getById, update, remove } = require("./item.controller");


// /api/item
apiRouter.route("/")
    .get(getAll)
    .post(create)

// /api/item/:id
apiRouter.route("/:id")
    .get(getById)
    .put(update)
    .delete(remove)


module.exports = apiRouter;