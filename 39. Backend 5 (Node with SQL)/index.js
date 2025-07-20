const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port =8080;
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "586326",
});
//Getting Data from faker
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Inserting new data
let q = "INSERT INTO user (id,username,email,password) VALUES ?";

//pushing fake datas to data array
let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser());
}
try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}
connection.end();
 
app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});