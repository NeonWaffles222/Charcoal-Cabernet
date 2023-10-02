import React from "react";

import '../styles/TopNavigationBar.scss';


const TopNavigation = () => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">Charcoal & Cabernet</span>
      <div className="top-nav-bar__routes">
        <span className="top-nav-bar__item">Menu</span>
        <span className="top-nav-bar__item">Reservations</span>
        <span className="top-nav-bar__item">Order</span>
        <span className="top-nav-bar__item">Login</span>
        <span className="top-nav-bar__item">Register</span>
      </div>
    </div>
  );
};

export default TopNavigation;