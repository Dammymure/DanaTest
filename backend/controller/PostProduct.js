const express = require('express')
const Product = require("../model/Product.js")

// Create a Product
const CreateProduct = async (req, res) => {
 try {
  const { sellerId, sellerName, sellerLocation, make, model, year, price, color, mileage, description } = req.body

  // const seller = await Product.findById(sellerId)
  // if (!seller) {
  //  res.status(404).json({ message: "Seller not found" })
  // }
  // const sellerIs = seller.firstname + " " + seller.lastname
  const newProduct = await Product.create({
   sellerId,
   sellerName,
   sellerLocation,
   make,
   model,
   year,
   color,
   mileage,
   price,
   description,
   available: true,
  })

  res.status(201).json({ msg: "Your product has been registered", newProduct })
 } catch (error) {
  res.status(500).json({ error: error.message, msg: "An error at product creation" })
 }
}

module.exports = { CreateProduct }