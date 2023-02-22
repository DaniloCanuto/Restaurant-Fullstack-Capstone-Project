const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const app = express();

// connect db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () =>
  console.log("DB connection successful")
);

// routes and middlewares
// the two middlewares below make req.body accessible to prevent them from returning undefined.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authController);
app.use("/product", productController);
app.use("/upload", uploadController);

// start server
app.listen(process.env.PORT, () => console.log("Server started successfully"));
