const express=require("express");
const app=express();
const port=8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/register",(req,res)=>{
    let {user,pass}=req.query;
    res.send(`Standard GET Response.Welcome ${user}.`);
});

app.post("/register",(req,res)=>{
    let {user,pass}=req.body;
    console.log(req.body);
    res.send(`Satndard POST Response.Welcome ${user}.`)
})

app.listen(port,()=>{
    console.log(`App is listening to ${port}.`);
});