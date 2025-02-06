import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (response.data.message === "Success") {
        localStorage.setItem("token", response.data.token); // Store JWT token
        setUser({ name: response.data.username });
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="section-login">
      <div className="main-container">
        <h1>Vigyaan</h1>
        <p className="form-type">Log in</p>
        <form className="form-container" onSubmit={handleSubmit}>
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
            Log in
          </button>
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Display error */}
          <p>
            New user?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
