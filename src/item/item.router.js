const { Router } = require("express");
const apiRouter = Router();
const {execute} = require("./item.controller");

execute();

// /api/item
apiRouter.route("/item")
    .get((req, res) => {
        res.json({message: "I'm get item for router"})
    })
    .post((req, res) => {
        console.log(req.body)
        res.status(200).json({message: "I'm post item for router"})
    })
    .put((req, res) => {
        console.log(req.body)
        res.status(200).json({message: "I'm put item for router"})
    })

module.exports = apiRouter;