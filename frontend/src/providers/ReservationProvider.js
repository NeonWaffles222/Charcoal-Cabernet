import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';


export const reservationContext = createContext();

export default function ReservationProvider(props) {
  const [tables, setTables] = useState(null);
  const [reservations, setReservations] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/tables.json`)
      .then(res => {
        console.log(res.data);
        setTables(res.data);
      })
      .catch(error => {
        console.error('error getting tables', error);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/reservations.json`)
      .then(res => {
        console.log(res.data);
        setReservations(res.data);
      })
      .catch(error => {
        console.error('error getting reservations', error);
      });
  }, []);

  const reservationData = { tables, reservations };

  return (
    <reservationContext.Provider value={reservationData}>
      {props.children}
    </reservationContext.Provider>
  );
};