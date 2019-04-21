var mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true,
        trim: true
    },
    description: {
        type: String, 
        require: true,
        trim: true,
        maxlength: 100
    },
    state: {
        type: String, 
        require: true,
        enum: ["stock", "depleted", "requested"],
        default: "stock"
    },
    quantity: {
        type: Number, 
        require: true,
        default: 0
    },
}, {timestamps: true});

itemSchema.index({name: 1}, {unique: true})

module.exports = mongoose.model("item", itemSchema)