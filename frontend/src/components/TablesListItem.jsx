import React, { useContext } from "react";
import { reservationContext } from "../providers/ReservationProvider";
import { authContext } from "../providers/AuthProvider";
import '../styles/TableListItem.scss';

const TablesListItem = ({ tableObj, guests, date, time }) => {
  const { makeReservation } = useContext(reservationContext);
  const { auth, user } = useContext(authContext);
  const { table, taken } = tableObj;
  const onSubmit = async (event) => {
    event.preventDefault();
    if (auth) {
      try {
        const success = await makeReservation(date, guests, user.id, table.id);
        if (success) {
          console.log('reservation success');
          alert(`Reservation made for ${date} at table ${table.id}`);
          window.location = "/";
        }
      } catch (error) {
        console.error('Error during reservation:', error);
      }
    } else {
      alert("Please log in to make a reservation");
    }
  };
  let tableButton = <button className={`btn-valid but-${table.id}`} onClick={onSubmit}>Table {table.id}</button>;
  if (guests > table.capacity || table.capacity > Number(guests) + 1) {
    tableButton = <button className={`btn-disabled but-${table.id}`} disabled>Table {table.id}</button>;
  } else if (taken) {
    tableButton = <button className={`btn-taken but-${table.id}`} disabled>Table {table.id}</button>;
  }

  return (
    <>
      {tableButton}
    </>
  );
};

export default TablesListItem;