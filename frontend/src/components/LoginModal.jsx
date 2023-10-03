import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";

import '../styles/LoginModal.scss';

const LoginModal = ({ onLoginSelect, onRegisterSelect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onSubmit = (event) => {
    event.preventDefault();
    email && login(email, password);
    onLoginSelect();
  };


  return (
    <div className="login-modal">
      <form onSubmit={onSubmit}>
        <input type="text" name="email" value={email} placeholder="Email" onChange={event => setEmail(event.target.value)} />
        <input type="password" name="password" value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} />
        <button type="submit" name="submit">Login</button>
      </form>
      <button onClick={() => onRegisterSelect()}>Not a member? Register here</button>
    </div>
  );
};

export default LoginModal;