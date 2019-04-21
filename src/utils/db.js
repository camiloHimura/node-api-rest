const { dbUrl } = require("../config");
const mongoose = require("mongoose");


module.exports = {
    connect(url = dbUrl, opts = {}) {
        console.log("--- conection url ---", url)
      return mongoose.connect(url, {...opts, useNewUrlParser: true} )
    }

} 
