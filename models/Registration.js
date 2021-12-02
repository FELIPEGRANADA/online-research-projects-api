// Definition packages
const { Schema, model} = require("mongoose");

// Registration Schema
const RegistrationSchema = Schema({
    projectid : {
        type : String,
        require : true
    },
    studentid: {
        type : String,
        require : true
    },
    status: {
        type : String,
        require : true
    },
    startdate: {
        type : String,
        require : true
    },
    enddate: {
        type : String,
        require : true
    }
});

module.exports = model("Registration", RegistrationSchema);