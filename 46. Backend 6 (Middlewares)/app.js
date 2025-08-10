const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("Hi, I'm 1st middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hi, I'm 2nd middleware");
//   next();
// });

// app.use((req,res,next)=>{
//     req.responseTime=new Date(Date.now()).toString();
//     console.log(.method,req.path,req.responseTime,req.hostname);
//     next();
// })

app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    res.send("ACCESS DENIED");
})

app.get("/api",(req,res)=>{
    res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hi, i'm root");
});

app.get("/random", (req, res) => {
  res.send("this is random page");
});

app.listen(8080, () => {
  console.log("Listening to port 8080");
});
