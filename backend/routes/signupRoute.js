import express from "express";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js"; // Ensure correct path

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;

    // Check if email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "Email already in use" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await userModel.create({
      ...rest,
      email, // Ensure email is included in the new user
      password: hashedPassword,
    });

    res.json(newUser);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
