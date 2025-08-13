//requiring express
const express = require("express");
const app = express();

//requiring path to use ejs aur set directory
const path = require("path");

//requring mongoose
const mongoose = require("mongoose");

//requring chat.js from model directory
const Chat = require("./models/chat.js");

//requring method-override
const methodOverride = require("method-override");

//Requiring Custom error handler
const ExpressError = require("./ExpressError");
//Requiring Async Wrapper
const asyncWrap=require("express-async-wrapper");

//setting path to views as default directory for ejs engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//making connection to mongo db using mongoose
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
//index route
app.get("/chats", async (req, res, next) => {
  try {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});
//new route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404,"Page not found");
  res.render("newChat.ejs");
});
//create route
app.post("/chats", async (req, res, next) => {
  try {
    let { to, msg, from } = req.body;
    let newChat = new Chat({
      from: from,
      msg: msg,
      to: to,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
}),

// function asyncWrap(fn){
//   return function(req,res,next){
//     fn(req,res,next).catch(err=>next(err));
//   };
// };
  // NEW-Show route
  app.get("/chats/:id",asyncWrap( async (req, res, next) => {
      let { id } = req.params;
      let chat = await Chat.findById(id);
      if (!chat) {
        next(new ExpressError(404, "Chat not found"));
      }
      res.render("edit.ejs", { chat });
  }));
//edit route
app.get("/chats/:id/edit", async (req, res,next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

//Update route
app.put("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//Destroy Route
app.delete("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

//working on root directory
app.get("/", (req, res) => {
  res.send("working root");
});
const handleValidationErr=(err)=>{
  console.log("This was a Validation error.Please follow rules");
  console.dir(err.message);
  return err;
}

app.use((err,req,res,next)=>{
  console.log(err.name);
  if(err.name==="ValidationError"){
    err=handleValidationErr(err);
  }
  next(err);
});
//Error Handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
});

//listening to port
app.listen(8080, () => {
  console.log("app is listening");
});
