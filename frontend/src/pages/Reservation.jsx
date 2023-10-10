import React, { useContext, useState } from "react";
import { reservationContext } from "../providers/ReservationProvider";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TablesListItem from "../components/TablesListItem";
import "../styles/TableFloorMap.css";
import "../styles/TableListItem.scss";

const Reservation = () => {
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState();
  const [search, setSearch] = useState(false);
  const [tableList, setTableList] = useState([]);

  const { searchReservations } = useContext(reservationContext);

  //const tableList = tables.map(table => <button>{table.id}</button>);
  const onSubmit = async (event) => {
    event.preventDefault();
    setTableList(searchReservations(date));
    console.log(tableList);
    setSearch(true);
  };
  return (
    <div className="reservation">
      <h1>Make a Reservation</h1>
      <form onSubmit={onSubmit} className="reservation-form">
        <DatePicker
          className="reservation-form-item datepicker"
          placeholderText="Select Date and Time"
          selected={date}
          onChange={event => setDate(event)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="Time"
          minTime={new Date().setHours(11, 0)}
          maxTime={new Date().setHours(23, 0)}
          showTime={{ user12hours: true }}
        />
        <div className="select">
          <select id="guests" value={guests} onChange={event => setGuests(event.target.value)}>
            <option value={0}>Select number of guests:</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <button className="search-submit reservation-form-item" type="submit" name="submit">Search Reservations</button>
      </form>
      {search &&
        <div className="imageContainer">
          {tableList.map((table, index) => <TablesListItem key={index} tableObj={table} guests={guests} date={date} />)}
        </div>}
    </div>
  );
};

export default Reservation;