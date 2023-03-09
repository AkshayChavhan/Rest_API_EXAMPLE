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

// GET METHOD to get user names
app.get("/user" ,(req,res) =>{
    const user = [
        {id :1 , nmae :"John Maker"},
        {id :2 , nmae :"Sandeep kotwal"}
    ];
    res.json(user);
})

app.post("/user" , (req,res) =>{
    const user = req.body ;
//    user saved in database
    res.json({message :"User saved successfully"})
});

app.put("/user/:id" , (req,res) =>{
    const userId = req.params.id ;
    const user = req.body ;
    // update the user in database
    res.json({message : `User with id ${userId} uploaded successfully`})
});

app.delete("/user/:id" ,(req,res) =>{
    const userId = req.params.id ;
    // delete the use frpm datbase
    res.json({message : `User with id ${userId} deleted successfully`})
});



// listening for requests
app.listen(3000 , ()=>{
    console.log("Server is listening on port 3000");
})