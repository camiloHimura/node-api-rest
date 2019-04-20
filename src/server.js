const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");

const apiRouter = require("./apiRouter");

const App = express();
const PORT = process.env.PORT || 8080;

//Custom MiddleWare
const myGeneralMiddleWare = (req, res, next) => {
    req.body = Object.assign(req.body, {added: "This was added by myGeneralMiddleWare"});
    next();
}

const mySpecificMiddleWare = (req, res, next) => {
    req.body = Object.assign(req.body, {addedSpecific: "This was added by a mySpecificMiddleWare"});
    next();
}

//General MiddleWares
App.use(cors());
App.use(bodyParse.json());
App.use(myGeneralMiddleWare);
App.use(bodyParse.urlencoded({ extended: true }));

//Exact
//Router Order
App.get("/", (req, res, next) => {
    //res.send({message: "Hi I'm get"})
    next()
})

App.get("/", (req, res) => {
    res.send({message: "Hi I'm the second get"})
})

//Regex
App.get(/^\/camilo/, (req, res) => {
    res.send({message: "Hi I'm get Regex"})
})

//Glob
App.get("/client/*", (req, res) =>{
    res.send({message: "Hi I'm get Glob"})
})

//Paramethers
App.get("/user/:name", (req, res) =>{
    res.send({message: "Hi I'm get Paramethers"})
})

//Specific MiddleWare
App.post("/", [mySpecificMiddleWare], (req, res) => {
    console.log(req.body)
    res.send({message: "Hi I'm post with nodemon custom config"})
})

//delegate to a router
App.use("/api", apiRouter)

module.exports = {
                    start(){
                        App.listen(PORT, () => console.log(`I'm node listen port ${PORT}`))
                    }
                };