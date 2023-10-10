import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";

import '../styles/RegisterModal.scss';

const RegisterModal = ({ onLoginSelect, onRegisterSelect }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register } = useContext(authContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const success = await register(firstName, lastName, email, phone, password, confirmPassword);
      if (success) {
        onRegisterSelect();
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="register-modal">
      <button className="register-modal__close" onClick={() => onRegisterSelect()}>X</button>
      <span className="register-modal__header">Create Account</span>
      <form className="register-modal__form" onSubmit={onSubmit}>
        <input type="text" name="firstName" value={firstName} placeholder="First Name" autoFocus = {true} onChange={event => setFirstName(event.target.value)} required />
        <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={event => setLastName(event.target.value)} required />
        <input type="text" name="phone" value={phone} placeholder="Phone Number" onChange={event => setPhone(event.target.value)} required />
        <input type="text" name="email" value={email} placeholder="Email" onChange={event => setEmail(event.target.value)} required />
        <input type="password" name="password" value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} required />
        <input type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={event => setConfirmPassword(event.target.value)} required />
        <button type="submit" name="submit" className="register-modal__submit">Register</button>
      </form>
      <button className="register-modal__submit" onClick={() => onLoginSelect()}>Already a member? Login here</button>
    </div>
  );
};

export default RegisterModal;