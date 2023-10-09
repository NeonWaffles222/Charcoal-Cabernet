import React, { useContext, useState } from "react";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import { reservationContext } from "../providers/ReservationProvider";
import { authContext } from "../providers/AuthProvider";
import TablesListItem from "../components/TablesListItem";

const Reservation = () => {
  const [guests, setGuests] = useState(0);
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [search, setSearch] = useState(false);
  const [tableList, setTableList] = useState([]);

  const { tables, makeReservation, searchReservations } = useContext(reservationContext);
  const { auth, user } = useContext(authContext);

  //const tableList = tables.map(table => <button>{table.id}</button>);
  const onSubmit = async (event) => {
    event.preventDefault();
    setTableList(searchReservations(date, time));
    console.log(tableList);
    setSearch(true);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={onSubmit} className="reservation-form">
        <DatePicker label="Basic date picker" onChange={event => setDate({ day: event.$D, month: event.$M, year: event.$y })} required />
        <TimePicker
          label="Basic time picker"
          onChange={event => setTime({ hour: event.$H, minute: event.$m })}
          required />
        <input type="text" name='guests' placeholder='Guests' onChange={event => setGuests(event.target.value)} required />
        <button type="submit" name="submit">Search</button>
      </form>
      <ul>
        {search && tableList.map((table, index) => <TablesListItem key={index} tableObj={table} guests={guests} date={date} time={time} />)}
      </ul>
    </LocalizationProvider>
  );
};

export default Reservation;