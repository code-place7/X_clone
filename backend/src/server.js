import express from "express";
import "dotenv/config.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
