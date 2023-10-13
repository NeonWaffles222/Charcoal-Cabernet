import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";

import '../styles/LoginModal.scss';

const LoginModal = ({ onLoginSelect, onRegisterSelect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let success = await login(email, password);

      if (success) {
        onLoginSelect();
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <div className="login-modal">
      <button className="login-modal__close" onClick={() => onLoginSelect()}>X</button>
      <span className="login-modal__header">Login</span>
      <form className="login-modal__form" onSubmit={onSubmit}>
        <input type="text" name="email" value={email} placeholder="Email" autoFocus={true} onChange={event => setEmail(event.target.value)} required />
        <input type="password" name="password" value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} required />
        <button className="login-modal__submit" type="submit" name="submit">Login</button>
      </form>
      <button className="login-modal__submit" onClick={() => onRegisterSelect()}>Not a member? Register here</button>
    </div>
  );
};

export default LoginModal;