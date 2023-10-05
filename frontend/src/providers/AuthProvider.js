import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';


export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      axios.post(`http://localhost:3001/sessions`, {
        email: email,
        password: password
      })
        .then(res => {
          if (res.data) {
            setAuth(true);
            setUser(res.data.user);
            localStorage.setItem('authToken', res.data.token);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          console.error('error logging in', error);
          resolve(error);
        });
    });
  };

  const logout = () => {
    axios.delete(`http://localhost:3001/sessions/${user.id}`)
      .then(res => {
        setAuth(false);
        setUser(null);
        localStorage.removeItem('authToken');
      })
      .catch(error => {
        console.error('error logging out', error);
      });
  };

  const register = (firstName, lastName, email, phone, password, confirmPassword) => {
    return new Promise((resolve, reject) => {
      axios.post(`http://localhost:3001/users`, {
        user: {
          first_name: firstName,
          last_name: lastName,
          phone_number: phone,
          email: email,
          password: password,
          password_confirmation: confirmPassword
        }
      })
        .then(res => {
          if (res.data) {
            setAuth(true);
            setUser(res.data.user);
            localStorage.setItem('authToken', res.data.token);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          console.error('error creating account', error);
        });
    });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      axios.get(`http://localhost:3001/sessions.json`)
        .then(res => {
          console.log(res);
          if (res.data) {
            setAuth(true);
            setUser(res.data);
          } else {
            setAuth(false);
            setUser(null);
          }
        })
        .catch(error => {
          console.error('error getting session data', error);
        });
    }
  }, []);

  const userData = { auth, user, login, logout, register };

  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
}
