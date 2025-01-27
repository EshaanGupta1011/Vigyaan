import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./TypingAnimation.css";

const TypedEff = () => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: [
        '<span style="color: #0077FF;">Machine Learning !</span>', // Brighter blue
        '<span style="color: #FF4D4D;">Data Science !</span>', // Bright red
        '<span style="color: #FFC300;">Time Series Analysis !</span>', // Bright yellow
        '<span style="color: #4CAF50;">Data Analysis !</span>', // Brighter green
        '<span style="color: #FF5733;">Automation Models !</span>', // Bright orange
        '<span style="color: #FF69B4;">Data Visualisation !</span>', // Bright pink
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 600,
      loop: true,
      onBegin: (self) => console.log("Typing started!", self),
      onComplete: (self) => console.log("Typing completed!", self),
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <h1 className="text">
        <span ref={typedElementRef}></span>
      </h1>
    </div>
  );
};

export default TypedEff;
