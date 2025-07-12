const express=require("express");
const app=express();

let port=8080; app.listen(port, ()=>{
    console.log(`app is lsitening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("hello, i am root");
})

app.get("/:username")