const express = require('express');
const router = express.Router()

const { createNewUser } = require("../controller/UserController")

router.post("/createuser", createNewUser)

module.exports = router