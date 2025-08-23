const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/a-car-parked-in-front-of-a-large-building-oFKUztRHl1o",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-car-parked-in-front-of-a-large-building-oFKUztRHl1o"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  review:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review",
    }
  ],
});

listingSchema.post("findOneAndDelete", async(listing)=>{
  if(listing){
  await Review.deleteMany({_id:{$in:listing.review}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
