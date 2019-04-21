const { dbUrl } = require("../config");
const mongoose = require("mongoose");

module.exports = {
    connect(url = dbUrl, opts = {}) {
      return mongoose.connect(url, {...opts, useNewUrlParser: true} )
    }

} 
