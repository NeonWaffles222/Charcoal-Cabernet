import React from "react";
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="footer-bar">
      <div className="footer-bar__info">
        <span className="footer-bar__item">ABOUT US</span>
        <span className="footer-bar__item">FEEDBACK</span>
        <span className="footer-bar__item">CONTACT US</span>
        <span className="footer-bar__item">TERMS OF USE</span>
      </div>
      <div className="footer-bar__media">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
    </div>
  );
};

export default Footer;