import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userModel from "./models/userModel.js";
import loginRoute from "./routes/loginRoute.js";
import signupRoute from "./routes/signupRoute.js";
import authenticateToken from "./middleware/authMiddleware.js"; // Import auth middleware

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.VITE_DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Public Routes
app.use(loginRoute);
app.use(signupRoute);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
