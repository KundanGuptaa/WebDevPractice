//Requring mongoose in Express
const mongoose = require("mongoose");

//Establising Connection With Async Function
main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
//Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
//Schema Model
const User = mongoose.model("User", userSchema);

//Creating users
// const user2 = new User({
//   name: "Kundan Gupta",
//   email: "kundanGupta@email.com",
//   age: 24,
// });

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"Tony",email:"tony@email.com",age:24},
//     {name:"Stark",email:"Stark@email.com",age:30},
//     {name:"Bruce",email:"tony@email.com",age:47},
// ]).then((res)=>{
//     console.log(res);
// });

User.find({age:{$gt:30}}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});