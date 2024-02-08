const express = require("express") ;
const { login } = require("../controller/UserController.js")

const router = express.Router()

router.post('/login', login)

module.exports = router