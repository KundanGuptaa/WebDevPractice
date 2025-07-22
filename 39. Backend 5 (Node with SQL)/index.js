const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const { render } = require("ejs");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

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
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// //Inserting new data
// let q = "INSERT INTO user (id,username,email,password) VALUES ?";

// //pushing fake datas to data array
// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser());
// }
// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end();

//This is our home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});
//Show route to show data of users
app.get("/user", (req, res) => {
  let q = `SELECT * FROM USER`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showUsers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECt * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});

//Update Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Wrong! Password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});
//Add new data

app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  let q = `INSERT INTO user (id,username,email,password) VALUES ('${id}','${username}','${email}','${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("New User added");
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    console.log("Some Error with DB");
  }
});

//Delete Route
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECt * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in Database");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (user.password != password) {
        res.send("Wrong! Credentials.");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          console.log(result);
          console.log("Deleted!");
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    res.send("Some Error in DB");
  }
});

app.listen("8080", () => {
  console.log(`Listening on port 8080`);
});
