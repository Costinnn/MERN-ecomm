require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//routes imp
const userRoutes = require("./routes/userRoute");
const authRoutes = require("./routes/authRoute");

const app = express();
app.use(express.json()); // for sending json data

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(console.log("DB conected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
