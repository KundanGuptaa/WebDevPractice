const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is lsitening on port ${port}`);
});
// app.use((req,res)=>{
//     console.log("Request Received");
//     res.send({
//         name:"apple",
//         color:"red"
//     })
// })

// app.get("/kundan", (req, res) => {
//     res.send("hello, i am kundan");
// });

// app.get("/", (req, res) => {
//     res.send("hello, i am root");
// });

// app.get("*name", (req, res) => {
//     res.send("404 Page not found!");
// });
// app.post("/",(req,res)=>{
//     res.send("You send post request to root.")
// })

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    console.log(req.params);
    res.send(`Welcoms to the page of @${username}.`);
})

app.get("/search",(req,res)=>{
    let {q}=req.query;
    console.log(req.query);
    if(!q){
        res.send("<h1>Nothing Searched</h1>");
    }
    let htmlstr=`<h1>These are the search result for ${q}</h1>`;
    res.send(htmlstr);
})