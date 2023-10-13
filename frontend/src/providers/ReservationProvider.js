import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const reservationContext = createContext();

export default function ReservationProvider(props) {
  const [tables, setTables] = useState(null);
  const [reservations, setReservations] = useState(null);

  const makeReservation = (date, guests, user_id, table_id) => {
    const date_time = date;
    return new Promise((resolve, reject) => {
      axios.post(`http://localhost:3001/reservations`, {
        reservation: {
          user_id,
          table_id,
          date_time,
          number_of_people: guests,
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          console.error('error making reservation', error);
          reject(error);
        });
    });
  };

  const searchReservations = (date) => {
    const searchDate = date;

    let tableList = [];
    for (let table of tables) {
      let taken = false;
      for (let reservation of reservations) {
        if (table.id == reservation.table_id) {
          const reservationDate = new Date(reservation.date_time);
          if (reservationDate.getDay() === searchDate.getDay()) {
            const timeDifference = reservationDate.getTime() - searchDate.getTime();
            if (Math.abs(timeDifference) < 7200000) {
              taken = true;
            }
          }
        }
      }
      tableList.push({ table: table, taken });
    }
    return tableList;
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
        setReservations(res.data);
      })
      .catch(error => {
        console.error('error getting reservations', error);
      });
  }, []);

  const reservationData = { tables, reservations, makeReservation, searchReservations };

  return (
    <reservationContext.Provider value={reservationData}>
      {props.children}
    </reservationContext.Provider>
  );
};