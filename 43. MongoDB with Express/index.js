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
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
//index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});
//new route
app.get("/chats/new", (req, res) => {
  res.render("newChat.ejs");
});
//create route
app.post("/chats", (req, res) => {
  let { to, msg, from } = req.body;
  let newChat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("Chat Was Saved.");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
}),
  //edit route
  app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render("edit.ejs", { chat });
  });

//put route
app.put("/chats/:id", async (req, res) => {
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
});

//Destroy Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat=await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

//working on root directory
app.get("/", (req, res) => {
  res.send("working root");
});

//listening to port
app.listen(8080, () => {
  console.log("app is listening");
});
