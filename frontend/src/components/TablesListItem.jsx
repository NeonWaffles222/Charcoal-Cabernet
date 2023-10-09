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
        const success = await makeReservation(date, time, guests, user.id, table.id);
        if (success) {
          console.log('reservation success');
        }
      } catch (error) {
        console.error('Error during reservation:', error);
      }
    } else {
      alert("Please log in to make a reservation");
    }
  };
  let tableButton = <button className="btn-valid" onClick={onSubmit}>Table {table.id}</button>;
  if (guests > table.capacity || table.capacity > Number(guests) + 1) {
    tableButton = <button className="btn-disabled" disabled>Table {table.id}</button>;
  } else if (taken) {
    tableButton = <button className="btn-taken" disabled>Table {table.id}</button>;
  }

  return (
    <li>
      {tableButton}
    </li>
  );
};

export default TablesListItem;