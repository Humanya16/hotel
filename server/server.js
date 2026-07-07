const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const authRoutes = require("../routes/authRoutes");
const roomRoutes = require("../routes/roomRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hoteldb";

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});