require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//routes imp
const userRoutes = require("./routes/userRoute");
const authRoutes = require("./routes/authRoute");
const productRoutes = require("./routes/productRoute");
const cartRoutes = require("./routes/cartRoute");
const orderRoutes = require("./routes/orderRoute");

const app = express();
app.use(express.json()); // for sending json data

app.use("/api/users", userRoutes); // user/:id or stats
app.use("/api/auth", authRoutes); // register or login
app.use("/api/products", productRoutes); // find/:id
app.use("/api/carts", cartRoutes); // find/:id
app.use("/api/orders", orderRoutes); // find/:id or income

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(
    app.listen(process.env.PORT, () => {
      console.log("Server is running, DB connected");
    })
  )
  .catch((err) => console.log(err));
