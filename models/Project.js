// Definition packages
const { Schema, model} = require("mongoose");

// Project Schema
const ProjectSchema = Schema({
    name : {
        type : String,
        require : true
    },
    generalobj: {
        type : String,
        require : true
    },
    specificobj: {
        type : String,
        require : true
    },
    budget: {
        type : Number,
        require : true
    },
    startdate: {
        type : String,
        require : true
    },
    enddate: {
        type : String,
        require : true
    },
    leaderid: {
        type : String,
        require : true
    },
    status: {
        type : String,
        require : true
    },
    stage: {
        type : String,
        require : true
    }
});

module.exports = model("Project", ProjectSchema);