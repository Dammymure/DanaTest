const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")

const productRouter = require("./route/ProductRoute")
const userRouter = require("./route/UserRoute")
const authRouter = require("./route/auth")
const bodyParser = require('body-parser');



const PORT = 9000
// Connect server to database
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
  console.log("Database is connected successfully");
 })
 .catch((err) => {
  console.log(err);
 })


// Cors middleware
app.use(cors({ origin: true }))
// middlewae for post http model
app.use(express.json())


app.use("/api", productRouter)
app.use("/register", userRouter)
app.use("/auth", authRouter)

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
})