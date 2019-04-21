const Item  = require("./item.model");
const generalCrud = require("../utils/generalCrud")

const format = data => {
    let {_id, name, description, state, quantity} = data; 
    return {id: _id, name, description, state, quantity}
}

const arrayFormat = data => data.reduce((accum, current) => [...accum, format(current)], [])

module.exports = generalCrud(Item, {format, arrayFormat})

