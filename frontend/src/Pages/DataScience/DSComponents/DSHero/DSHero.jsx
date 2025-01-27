import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./DSHero.css";

const DSHero = () => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: [
        "Unlock the world of data science with our platform—designed for everyone, from beginners to experts. Dive into data, uncover insights, and master unique features effortlessly!",
      ],
      typeSpeed: 20, // Adjust speed if necessary
      backSpeed: 30,
      backDelay: 600,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="section-datascience">
      <h1 className="datascience-heading">Data Science Portal</h1>
      <p className="datascience-desc">
        <span ref={typedElementRef}></span> {/* Apply typed animation here */}
      </p>
    </div>
  );
};

export default DSHero;
