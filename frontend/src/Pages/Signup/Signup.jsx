import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors before submitting

    try {
      const response = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
      });

      if (response.data.message === "Email already in use") {
        setError("Email already in use. Try another one.");
      } else {
        console.log(response);
        navigate("/login");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="section-login">
      <div className="main-container">
        <h1>Vigyaan</h1>
        <p className="form-type">Sign up</p>
        <form className="form-container" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            autoComplete="off"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email ID: </label>
          <input
            type="email"
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password: </label>
          <input
            type="password"
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="form-btn" type="submit">
            Sign Up
          </button>
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Display error */}
          <p>
            Already a user?{" "}
            <span>
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
