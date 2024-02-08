const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
 {
  sellerId: {
   type: String,
   require: true,
  },
  sellerName: {
   type: String,
   require: true,
  },
  sellerLocation: {
   type: String,
   require: true,
  },
  make: {
   type: String,
   require: true,
  },
  model: {
   type: String,
   require: true,
  },
  year: {
   type: String,
   require: true,
  },
  color: {
   type: String,
   require: true,
  },
  mileage: {
   type: String,
   require: true,
  },
  price: {
   type: Number,
   require: true,
  },
  description: {
   type: String,
   require: true,
  }
 }, { timestamps: true }
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product