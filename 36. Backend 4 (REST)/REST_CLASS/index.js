const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts=[
    {
        username:"kundan gupta",
        content:"I Love Coding"
    },
    {
        username:"kundan kumar",
        content:"Hard work is important to achieve success"
    },
    {
        username:"kundan",
        content:"I Love new technologies"
    }
];
app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts});
});


app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
