// Definition packages
const { Schema, model} = require("mongoose");

// Progress Schema
const ProgressSchema = Schema({
    projectid : {
        type : String,
        require : true
    },
    date: {
        type : String,
        require : true
    },
    description: {
        type : String,
        require : true
    },
    observations: {
        type : String,
        require : true
    }
});

module.exports = model("Progress", ProgressSchema, "progress");