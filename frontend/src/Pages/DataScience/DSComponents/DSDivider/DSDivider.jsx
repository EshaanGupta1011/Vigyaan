import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "./DSDivider.css";

const RevealText = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: "chars" });

      gsap.fromTo(
        text.chars,
        {
          color: bg, // Start with background color
          scale: 1.5, // Scale up the characters to make them more prominent
        },
        {
          color: fg, // End with foreground color
          scale: 1, // Reset to original scale
          duration: 0.6, // Increased duration for more gradual change
          stagger: 0.05, // Increased stagger for a more noticeable sequential effect
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section>
      <h1 className="reveal-type" data-bg-color="#cccccc" data-fg-color="teal">
        OR
      </h1>
    </section>
  );
};

export default RevealText;
