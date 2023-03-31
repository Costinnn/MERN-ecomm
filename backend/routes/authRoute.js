const router = require("express").Router();
const User = require("../models/UserModel");
require("dotenv").config();


router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const response = await newUser.save();
    res.status(200).json({response});
  } catch (error) {
    res.status(500).json(error);
  }

  res.status(200).json("test");
});

module.exports = router;
