const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/",function(req,res)
{
    res.render("Home"); 
})
app.get("/men",function(req,res)
{
    
    res.render("men"); 
})
app.get("/women",function(req,res)
{
    res.render("women"); 
})
app.get("/kids",function(req,res)
{
    res.render("kids"); 
})
app.get("/home1",function(req,res)
{
    res.render("home1"); 
})
app.get("/beauty",function(req,res)
{
    res.render("beauty"); 
})
app.get("/studio",function(req,res)
{
    res.render("studio"); 
})
app.listen(3000,function()
{
    console.log("server started in port 3000");
})