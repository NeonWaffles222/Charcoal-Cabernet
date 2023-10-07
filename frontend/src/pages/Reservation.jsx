import React, { useContext, useState } from "react";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { reservationContext } from "../providers/ReservationProvider";
import { authContext } from "../providers/AuthProvider";
import TablesListItem from "../components/TablesListItem";

const Reservation = () => {
  const [guests, setGuests] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [search, setSearch] = useState(false);

  const { tables, makeReservation } = useContext(reservationContext);
  const { auth, user } = useContext(authContext);

  //const tableList = tables.map(table => <button>{table.id}</button>);
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(date, time, guests, user.id);
    try {
      const success = await makeReservation(date, time, guests, user.id);
      if (success) {
        console.log('reservation success');
      }
    } catch (error) {
      console.error('Error during reservation:', error);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={onSubmit}>
        <DatePicker label="Basic date picker" onChange={event => setDate({ day: event.$D, month: event.$M, year: event.$y })} required />
        <TimePicker label="Basic time picker" onChange={event => setTime({ hour: event.$H, minute: event.$m })} required />
        <input type="text" name='guests' placeholder='Guests' onChange={event => setGuests(event.target.value)} required />
        <button type="submit" name="submit">Search</button>
      </form>
      {search && tables.map(table => <button>{table.id}</button>)}
    </LocalizationProvider>
  );
};

export default Reservation;