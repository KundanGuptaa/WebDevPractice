const mongoose = require("mongoose");

//requring chat.js from model directory
const Chat = require("./models/chat.js");

//making connection to mongo db using mongoose
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
  {
    from: "Kundan",
    to: "Butri",
    msg: "How are you",
    created_at:new Date(),
  },
  {
    from: "Butri",
    to: "Kundan",
    msg: "I'm find.What about you",
    created_at:new Date(),

  },
  {
    from: "Kundan",
    to: "Butri",
    msg: "I good too. Had you done your breakfast?",
    created_at:new Date(),
  },
  {
    from: "Butri",
    to: "Kundan",
    msg: "Ya done the breakfast at 9.30. Had you done?",
    created_at:new Date(),
  },
  {
    from: "Kundan",
    to: "Butri",
    msg: "Ya I have done to at same time.",
    created_at:new Date(),
  },
  {
    from: "Butri",
    to: "Kundan",
    msg: "What You had in breakfast",
    created_at:new Date(),
  },
  {
    from: "Butri",
    to: "Kundan",
    msg: "Kuchho Nahiiii",
    created_at:new Date(),
  },
  {
    from: "Kundan",
    to: "Butri",
    msg: "Khodhi!!!  Marenge n.",
    created_at:new Date(),
  },
  {
    from: "Butri",
    to: "Kundan",
    msg: "Tb to achha hai. Aaiye Mariye",
    created_at:new Date(),
  },
  {
    from: "Kundan",
    to: "Butri",
    msg: "Thik....",
    created_at:new Date(),
  },
];

Chat.insertMany(allChats);