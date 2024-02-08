const express = require('express')
const bcrypt = require('bcrypt')
const User = require("../model/User")
const jwt = require("jsonwebtoken")


const createNewUser = async (req, res) => {
 try {
  const { fullname, email, password } = req.body
  // To check if the input already exists using unique email
  const existingUser = await User.findOne({ email: email })
  // if it exists give error
  if (existingUser) {
   return res.json({ msg: "User already exists", existingUser })
  }

  // If it doesnt exist create user 
  const createUser = await User.create({ fullname, email, password })
  res.status(201).json({ msg: "You have been registered", createUser })
 }
 catch (err) {
  res.send(err)
 }
}

const login = async (req, res) => {
 try {
  const { email, password } = req.body
  const user = await User.findOne({ email: email })
  if (!user) return res.status(400).json({ msg: "User does not exist." })
  // MATHING PASSWORD
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials." })
  // JWT SIGNING
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  delete user.password
  res.status(200).json({ token })

 } catch (err) {
  res.status(500).json({ error: err.message })
 }
}

module.exports = { createNewUser, login }