import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // Extract token from "Bearer <token>"
    req.user = verified; // Add user info to request
    next(); // Continue to the next middleware
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

export default authenticateToken;
