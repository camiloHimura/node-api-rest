const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");

const App = express();

App.use(bodyParse())
App.use(cors());

App.get("/", (req, res) => {
    console.log("sending get", req.params)
    res.status(200).send({
        message: "I'm a get rest",
        data: req.params,
    })
})

App.post("/", (req, res) => {
    console.log("sending post")
    res.status(200).send({
        message: "I'm a pos rest",
        data: req.body
    })
})

module.exports = {
    start(){
        App.listen(3000, () => console.log("running 8080"))
    }
}