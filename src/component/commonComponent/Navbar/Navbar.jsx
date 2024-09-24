import React from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="../../../../imgAndIcons/nike-logo.png" />
      </div>
      <div className="menu">
        <p>MENU</p>
        <p>LOCATION</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>
      <button className="login">LogIn</button>
    </nav>
  );
}

export default Navbar;
