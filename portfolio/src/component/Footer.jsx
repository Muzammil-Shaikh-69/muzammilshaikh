import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Muzammil Shaikh. All rights reserved.</p>
      <p>Contact: +91 8433862022 | muzammilggshaikh@gmail.com</p>
    </footer>
  );
};

export default Footer;
