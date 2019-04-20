var express = require("express");

const apiRouter = express.Router();

apiRouter.route("/item")
    .get((req, res) => {
        res.send({message: "I'm get item for router"})
    })
    .post((req, res) => {
        console.log(req.body)
        res.send({message: "I'm post item for router"})
    })


module.exports = apiRouter;