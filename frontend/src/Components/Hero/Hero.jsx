import React from "react";
import TypedEff from "../TypingAnimation/TypingAnimation";
import heroImg from "../../assets/hero-img.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-flex">
        <div className="hero-text">
          <p>Your all in one application for</p>
          <TypedEff />
          <div className="hero-btn-container">
            <button className="hero-btn">Get Started</button>
          </div>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
