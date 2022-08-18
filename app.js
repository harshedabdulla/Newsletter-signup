//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const request=require("request");

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000,function(){
    console.log("Server is running");
})

app.get("/",function(req,res){
    res.send("Server is up and running");
})