import express from "express";
import dotenv from "dotenv";
import exp from "constants";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import cartRoute from "./routes/cartRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import cors from "cors";

// Configure the dotenv
const app = express();
dotenv.config();
app.use(cors());

// Parse json bodies in the request object
app.use(express.json());

// Set the path to the frontend's public directory
// app.use(express.static(path.join(__dirname, "..", "..", "frontend", "public")));

// Importing the routes
app.use("/", userRoute);
app.use("/", productRoute);
app.use("/", orderRoute);
app.use("/", cartRoute);
app.use("/", reviewRoute);

// Error handling code
app.use((err, req, res, next) => {
  console.error(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong...",
  });
});

// Listening on port or 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
