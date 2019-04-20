const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");

const App = express();
const PORT = process.env.PORT || 8080;

const myGeneralMiddleWare = (req, res, next) => {
    req.body = Object.assign(req.body, {added: "This was added by myGeneralMiddleWare"});
    next();
}

const mySpecificMiddleWare = (req, res, next) => {
    req.body = Object.assign(req.body, {addedSpecific: "This was added by a mySpecificMiddleWare"});
    next();
}

App.use(cors());
App.use(bodyParse.json());
App.use(myGeneralMiddleWare);
App.use(bodyParse.urlencoded({ extended: true }));

App.get("/", (req, res) =>{
    res.send({message: "Hi I'm get"})
})

App.post("/", [mySpecificMiddleWare], (req, res) => {
    console.log(req.body)
    res.send({message: "Hi I'm post with nodemon custom config"})
})

module.exports = {
                    start(){
                        App.listen(PORT, () => console.log(`I'm node listen port ${PORT}`))
                    }
                };