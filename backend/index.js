import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

// Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/tmplate";

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRoutes);

// Database Connection
const db = mongoose.connect(
  MONGO_URL
).then(() => {
  console.log("Connected To MongoDB");
  app.listen(PORT, () => {
    console.log(`Hi Mom And Dad!!!\nLink  : http://localhost:${PORT}`);
  })
}).catch((error) => {
  console.log(`Error: ${error}`);
});

db();