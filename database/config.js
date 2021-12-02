// Definitions packages
const mongoose = require("mongoose");

// Definition connection to database
const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://online_research_projects_db_user:bgAGxIFMlz45sVrT@cluster0.lknzr.mongodb.net/online-research-projects");
        console.log("DataBase Connected")
    }catch(error){
        console.log(error);
    }
}
module.exports = {dbConnection}