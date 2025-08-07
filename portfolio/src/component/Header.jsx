import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="main-name">Muzammil <span className="highlighted">Shaikh</span></h1>
      <p className="tagline">Full Stack Developer | MERN Stack | Open to Work</p>
    </header>
  );
}

export default Header;