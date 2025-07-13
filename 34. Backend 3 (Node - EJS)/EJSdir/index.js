const express = require("express");
const app = express();
const path=require("path");
const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/rolldice",(req,res)=>{
    let diceNum=Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceNum});
});

app.get("/ig/:username",(req,res)=>{
    const followers=["kundan","hum","tum"];
 let {username}=req.params;
 console.log(username);
 res.render("insta.ejs",{username,followers});
});

