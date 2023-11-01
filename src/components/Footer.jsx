import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img id="footer-logo" src="/LITTLE-LEMON-LOGO.png" />
      </div>
      <div className="footer-item">
        <p>dormand nav</p>
      </div>
      <div className="footer-item">
        <p>Contact</p>
        <p>address</p>
        <p>phone</p>
        <p>email</p>
      </div>
      <div className="footer-item">
        <p>Social Media Links</p>
        <p>address</p>
        <p>phone</p>
        <p>email</p>
      </div>
    </footer>
  );
};

export default Footer;
