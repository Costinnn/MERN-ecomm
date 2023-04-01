const router = require("express").Router();
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const response = await newUser.save();
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const response = await User.findOne({ username: req.body.username });
    if (!response) {
      return res.status(401).json("Wrong username");
    }

    if (response.password !== req.body.password) {
      return res.status(401).json("Wrong password");
    }

    const accessToken = jwt.sign(
      {
        id: response._id,
        isAdmin: response.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );
    const { password, ...others } = response._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
