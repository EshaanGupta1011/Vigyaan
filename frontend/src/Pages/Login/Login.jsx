// src/components/Login/Login.jsx
import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Success") {
          setUser({ name: result.data.username });
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
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
