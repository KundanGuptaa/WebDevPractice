const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listings = require("./routes/listings.js");
const review = require("./routes/review.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(__dirname + "/public/css"));

app.get("/", (req, res) => {
  res.send("Hi! I'm Root.");
});

app.use("/listings", listings);
app.use("/listings/:id/review", review);

//wildcard route
app.all("*name", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

//Error Handling Middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something Went WRONG!" } = err;
  res.status(statusCode).render("error.ejs", { err });
  // res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("Server is Listening to port 8080");
});
