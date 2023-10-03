import React, { useContext } from "react";
import { authContext } from "../providers/AuthProvider";

import '../styles/TopNavigationBar.scss';


const TopNavigation = ({ onLoginSelect, onRegisterSelect }) => {
  const { auth, user, logout } = useContext(authContext);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">Charcoal & Cabernet</span>
      <div className="top-nav-bar__routes">
        <span className="top-nav-bar__item">Menu</span>
        <span className="top-nav-bar__item">Reservations</span>
        <span className="top-nav-bar__item">Order</span>
        {!auth && <>
          <span className="top-nav-bar__item" onClick={() => onLoginSelect()}>Login</span>
          <span className="top-nav-bar__item" onClick={() => onRegisterSelect()}>Register</span>
        </>}
        {auth && <>
          <span className="top-nav-bar__item">Welcome back {user.first_name}</span>
          <span className="top-nav-bar__item" onClick={logout}>Logout</span>
        </>}
      </div>
    </div>
  );
};

export default TopNavigation;