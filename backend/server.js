import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import userModel from "./models/userModel.js";

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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json({ message: "Success", username: user.name });
      } else {
        res.json({ message: "The password is incorrect" });
      }
    } else {
      res.json({ message: "No record exists" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { password, ...rest } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await userModel.create({
      ...rest,
      password: hashedPassword,
    });
    res.json(newUser);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json(error);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
