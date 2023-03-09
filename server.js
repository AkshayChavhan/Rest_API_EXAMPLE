const express = require("express");
const bodyParser = require("body-parser");


// create express app
const app = express();

// parse request of content-type - apllication/x-www-form-irlencoded
app.use(bodyParser.urlencoded({extended : true})) ;


// parse request of content-type -application/type
app.use(bodyParser.json());


// define simple route
app.get("/" , (req,res) =>{
    res.json({message :"Welcome to our RESTFUL API"});
});

// listening for requests
app.listen(3000 , ()=>{
    console.log("Server is listening on port 3000");
})