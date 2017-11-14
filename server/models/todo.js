let mongoose = require("mongoose");  
let Schema = mongoose.Schema;

let todoSchema = new Schema({  
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Todo", todoSchema); 