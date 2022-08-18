//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const request=require("request");

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.listen(3000,function(){
    console.log("Server is running");
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){

    var firstname = req.body.fName;
    var lastname = req.body.lName;
    var email = req.body.email;
    console.log(firstname,lastname,email);
});