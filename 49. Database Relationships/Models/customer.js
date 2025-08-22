const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer=async ()=>{
//     let cust1= new Customer({
//         name:"Rahul Kumar",
//     });

//     let order1= await Order.findOne({item:"Chips"});
//     let order2= await Order.findOne({item:"Chocolate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result=await cust1.save();
//     console.log(result);
// };

// addCustomer();
// const addOrder = async () => {
//   let result=await Order.insertMany([
//     { item: "Samosa", price: 20 },
//     { item: "Chips", price: 10 },
//     { item: "Chocolate", price: 40 },
//     { item: "Kurkure", price: 10 },
//     { item: "Lollipop", price: 5 },
//     { item: "Biscuit", price: 20 },
//     { item: "CottonCandy", price: 50 }
//   ]);
//   console.log(result);
// };

// addOrder();

const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

const addCust = async () => {
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  let newOrder = new Order({
    item: "Pizza",
    price: 250,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("New Customer Added!");
};

const delCust=async ()=>{
  let data = await Customer.findByIdAndDelete("68a69b84936893d65acee8aa");
};
 delCust();
// addCust();
