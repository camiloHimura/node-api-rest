const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.send({message: "Hi I'm get"})
})

app.post("/", (req, res) => {
    console.log(req.body)
    res.send({message: "Hi I'm post with nodemon custom config"})
})

module.exports = {
        start(){
            app.listen(PORT, () => console.log(`I'm node listen port ${PORT}`))
        }
};