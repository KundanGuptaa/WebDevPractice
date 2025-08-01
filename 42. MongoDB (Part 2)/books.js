//Requring mongoose in Express
const mongoose = require("mongoose");

//Establising Connection With Async Function
main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: 1,
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Marvel Comics",
  price: 500,
  category:"fiction",
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
