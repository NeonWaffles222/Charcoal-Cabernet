import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';


export const reservationContext = createContext();

export default function ReservationProvider(props) {
  const [tables, setTables] = useState(null);
  const [reservations, setReservations] = useState(null);

  const makeReservation = (date, time, guests, user_id) => {
    const date_time = `${date.day}/${date.month}/${date.year} ${time.hour}:${time.minute}`;
    return new Promise((resolve, reject) => {
      axios.post(`http://localhost:3001/reservations`, {
        reservation: {
          user_id,
          table_id: 1,
          date_time,
          number_of_people: guests,
        }
      })
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(error => {
          console.error('error making reservation', error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/tables.json`)
      .then(res => {
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

  const reservationData = { tables, reservations, makeReservation };

  return (
    <reservationContext.Provider value={reservationData}>
      {props.children}
    </reservationContext.Provider>
  );
};