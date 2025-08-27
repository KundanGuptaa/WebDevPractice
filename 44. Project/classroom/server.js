const express=require("express");
const app=express();
const user=require("./routes/user.js");
const post=require("./routes/post.js");
const cookieParser = require('cookie-parser');

app.use(cookieParser("secretcode"));

app.get("/getsignedcookie",(req,res)=>{
    res.cookie("made-in","India",{signed:true});
    res.send("Signed Cokkie Sent");
});

app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("Verified");
});

app.get("/getcookies",(req,res)=>{
    res.cookie("greet","namste");
    res.cookie("madeIn","India");
    res.send("Sent you some cookies!");
});

app.get("/greet",(req,res)=>{
    let {name=anonymous}=req.cookies;
    res.send(`Hi, ${name}`);
});

app.use("/user",user);
app.use("/post",post);

app.use("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("I'm Root");
})

app.listen(3000,()=>{
    console.log("Server is listening to 3000");
});