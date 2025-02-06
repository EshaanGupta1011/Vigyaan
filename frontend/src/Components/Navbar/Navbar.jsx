// src/components/Navbar/Navbar.jsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../assets/logo.png";
import { UserContext } from "../../Context";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);

    navigate("/");
  };

  return (
    <div className="navbar">
      {user ? (
        <div className="user-name-container">
          <p className="user-name">Welcome {user.name} !</p>
        </div>
      ) : (
        <div></div>
      )}

      <div className="navbar-logo-container">
        <img src={logoImg} alt="Logo" className="navbar-logo-img" />
      </div>
      {user ? (
        <div className="navbar-login-btn-container">
          <button className="navbar-login-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <Link to={"/login"}>
          <div className="navbar-login-btn-container">
            <button className="navbar-login-btn">Login</button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
