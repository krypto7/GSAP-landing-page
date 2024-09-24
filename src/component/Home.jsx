import React from "react";
import "./Home.css";
import Navbar from "./commonComponent/Navbar/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".logo", {
      opacity: 0,
      y: -30,
      duration: 0.3,
    })
      .from(".menu p", {
        opacity: 0,
        y: -10,
        stagger: 0.3,
        duration: 0.3,
      })
      .from(
        ".hero h1",
        {
          opacity: 0,
          stagger: 1,
          y: 30,
          duration: 1,
          // delay: 1,
        },
        "+=0.5"
      )
      .from(".hero", {
        opacity: 0,
        duration: 0.5,
        y: 50,
      })
      .from(".part2 img", {
        opacity: 0,
        y: 30,
      })
      .to(".part2 img", {
        keyframes: {
          "0%": { yPercent: 0 },
          "7%": { yPercent: 2, ease: "sine.in" },
          // "25%": { yPercent: 6, ease: "sine.in" },
          // "50%": { yPercent: 8, ease: "none" },
          "65%": { yPercent: 10 },
          "100%": { yPercent: 0 },
          easeEach: "sine.out",
        },
        duration: 3,
        repeat: -1,
        // transformOrigin: "center bottom",
      });
  });
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="part1">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btn-container">
            <button className="btn shopnow">Shop Now</button>
            <button className="btn category">Category</button>
          </div>
          <p>Also Available On</p>
          <div className="icon-container">
            <img src="../../imgAndIcons/amazon-a-logo-icon.png" />
            <img src="../../imgAndIcons/flipkart-icon.png" />
          </div>
        </div>
        <div className="part2">
          <img src="../../imgAndIcons/shoe_image.png" />
        </div>
      </div>
    </>
  );
}

export default Home;
