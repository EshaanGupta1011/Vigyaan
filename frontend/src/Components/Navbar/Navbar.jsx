import React from "react";
import "./Navbar.css";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div></div>
      <div className="navbar-logo-container">
        <img src={logoImg} alt="" className="navbar-logo-img" />
      </div>
      <Link to={"/login"}>
        <button className="navbar-login-btn">Login</button>
      </Link>
    </div>
  );
};

export default Navbar;
