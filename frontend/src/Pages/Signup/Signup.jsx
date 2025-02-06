import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
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
