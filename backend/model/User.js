const mongoose = require('mongoose')
const bcrypt = require("bcrypt")




const userSchema = new mongoose.Schema({
 fullname: {
  type: String,
  required: [true, "Please enter fullname"]
 },
 email: {
  type: String,
  required: [true, "Please enter email"]
 },
 password: {
  type: String,
  required: [true, "Please enter password"]
 }
},
 {
  timestamps: true,
 }
)

// Hashing of password
userSchema.pre("save", async function (next) {
 const salt = await bcrypt.genSalt(10)
 this.password = await bcrypt.hash(this.password, salt)
 next()
})

// Verify password
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
 return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema)
module.exports = User