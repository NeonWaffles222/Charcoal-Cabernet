import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="footer-bar">
      <div className="footer-bar__info">
        <Link to="/about">
          <span className="footer-bar__item">ABOUT US</span>
        </Link>
        <Link to="/feedback">
          <span className="footer-bar__item">FEEDBACK</span>
        </Link>
        <Link to="/contact">
          <span className="footer-bar__item">CONTACT US</span>
        </Link>
        <Link to="/terms-of-use">
          <span className="footer-bar__item">TERMS OF USE</span>
        </Link>
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