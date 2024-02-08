const express = require('express');
const router = express.Router()
const { CreateProduct } = require("../controller/PostProduct");
const { fetchAllProducts } = require('../controller/ReceiveProduct');
const { verifyToken } = require('../middleware/auth');

router.post("/sendData", verifyToken, CreateProduct)
router.get("/receiveData", verifyToken, fetchAllProducts)



module.exports = router