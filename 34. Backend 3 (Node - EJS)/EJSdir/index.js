const express = require("express");
const app = express();
const path=require("path");
const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));
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

app.get("/instagram/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
});

