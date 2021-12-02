// Definition packages
const { Schema, model} = require("mongoose");

// User Schema
const UserSchema = Schema({
    mail : {
        type : String,
        require : true
    },
    identification: {
        type : String,
        require : true
    },
    name: {
        type : String,
        require : true
    },
    password: {
        type : String,
        require : true
    },
    type: {
        type : String,
        require : true
    },
    status: {
        type : String,
        require : true
    }
});

module.exports = model("User", UserSchema);