import React, { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';

import '../styles/TopNavigationBar.scss';


const TopNavigation = ({ onLoginSelect, onRegisterSelect, toggleFav, onOrderSelect, open }) => {
  const { auth, user, logout, order } = useContext(authContext);
  // console.log(user, "user")
  return (
    <div className="top-nav-bar">
      {open === 'login' && <LoginModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
      {open === 'register' && <RegisterModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
      <Link to='/'>
        <span className="top-nav-bar__logo">Charcoal & Cabernet</span>
      </Link>
      <div className="top-nav-bar__routes">
        <Link to='/menu'>
          <span className="top-nav-bar__item">Menu</span>
        </Link>
        <span className="top-nav-bar__item">Reservations</span>

        {!auth && <>
          <span className="top-nav-bar__item" order={order} onClick={() => onLoginSelect()}  >Cart</span>
          <span className="top-nav-bar__item" onClick={() => onLoginSelect()}>Login</span>
          <span className="top-nav-bar__item" onClick={() => onRegisterSelect()}>Register</span>
        </>}
        {auth && <>
          <span className="top-nav-bar__item" onClick={() => onOrderSelect()}  >Cart</span>
          <span className="top-nav-bar__item" onClick={toggleFav}>Favorites</span>

          <span className="top-nav-bar__item">Welcome back {user.first_name}</span>
          <span className="top-nav-bar__item" onClick={logout}>Logout</span>
        </>}
      </div>
    </div>
  );
};

export default TopNavigation;