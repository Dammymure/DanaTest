const express = require('express')

const Product = require("../model/Product.js")

// Fetch all products
const fetchAllProducts = async (req, res) => {
 try {
  const getAllProducts = await Product.find()
  res.status(200).json(getAllProducts)
 }
 catch (error) {
  res.status(500).json({ error: error.message, msg: "An retreiving products" }) }
}

module.exports = { fetchAllProducts }