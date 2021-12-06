// Definition packages
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./DAO/schema");
const { dbConnection } = require("./database/config");

// Definition of the app (Main point)
const app = express();

// Connection to Database
dbConnection();

// Root Endpoint
app.get("/", (req, res) =>{
    res.json({
        ok:true,
        msg:"Answer OK"
    })
});

// Give grant connection to frontend
app.use(cors());

// Graphql EndPoint
app.use("/researchProject", graphqlHTTP({
    graphiql : true,
    schema : schema
}));

// Port of the server
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server run: "+ ${process.env.PORT || 4000}`);
})