import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import FavoriteProvider from './providers/FavoriteProvider';
import AuthProvider from './providers/AuthProvider';
import ReservationProvider from './providers/ReservationProvider';
import useApplicationData from './hooks/useApplicationData';
import TopNavigation from "./components/TopNavigationBar";
import MapContainer from './components/MapContainer';
import Home from './pages/Home';
import TableFloorMap from './components/TableFloorMap';
import Twilio from './components/Twilio';
import DishList from './components/DishList';

import FavoriteDishes from './components/Favorites';
import OrderModal from './modals/OrderModal';
import Footer from "./components/Footer";

import MenuList from './components/MenuList';
import About from './pages/About';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import TermsOfUse from './pages/TermsOfUse';
import Reservation from './pages/Reservation';
import PaymentModal from './modals/PaymentModal';
import PastOrderModal from './modals/PastOrderModal';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import OrderStatusModal from './modals/OrderStatusModal';
import DishScroll2 from './components/DishScroll2';
import './styles/DishScroll2.scss';
import Allergen from './components/Allergen';


function App() {

  const [client, setClient] = useState("");
  const [orderStatus, setOrderStatus] = useState("confirmed");
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios.post("/create_payment_intent")
      .then((res) => {
        // console.log("res", res);
        setClient(res.data);
      }
      );
  }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/favorites')
  //     .then((res) => {
  //       const favorites = res.data.map((foodItem) => foodItem.id);
  //       setFavorites(favorites);
  //     });
  // }, []);


  const {
    state,
    onLoginSelect,
    onRegisterSelect,
    onOrderSelect,
    onPastOrderSelect,
    onPaymentSelect,
    onOrderStatusSelect,
    addDish,
    removeDish,
    createOrder,
    emptyCart,
  } = useApplicationData();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);

  const toggleFav = () => {
    setIsFavOpen(!isFavOpen);
  };
  // console.log(state);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const initStripe = loadStripe("pk_test_51NxsaQEkmoqL8ThPHw4sW42MfhHSvHcJsB0VlWq4J8rQhsx6wp2aUvlSxP94OVtTGusvOikiQ6OZXInL8VKKnVMB00KfGzEfxL");

  return (
    <AuthProvider>
      <Router className="App">
        {/* <FavoriteProvider> */}
        {client && <Elements stripe={initStripe} options={{ clientSecret: client }}>
          <TopNavigation
            onLoginSelect={onLoginSelect}
            onRegisterSelect={onRegisterSelect}
            onOrderSelect={onOrderSelect}
            onPastOrderSelect={onPastOrderSelect}
            onOrderStatusSelect={onOrderStatusSelect}
            toggleMenu={toggleMenu}
            toggleFav={toggleFav}
            open={state.modal.open}
            state={state}
            orderStatus={orderStatus}
            setOrderStatus={setOrderStatus}
          />
          {state.modal.open === 'order' && <OrderModal
            onOrderSelect={onOrderSelect}
            state={state}
            createOrder={createOrder}
            removeDish={removeDish}
            emptyCart={emptyCart}
            onPaymentSelect={onPaymentSelect}
          />}
          {state.modal.open === 'past_order' && <PastOrderModal
            onPastOrderSelect={onPastOrderSelect}
            state={state}
          />}
          {state.modal.open === 'payment' && <PaymentModal
            onPaymentSelect={onPaymentSelect}
            state={state}
            createOrder={createOrder}
            removeDish={removeDish}
            emptyCart={emptyCart}
          />}
          {state.modal.open === 'order_status' && <OrderStatusModal
            onOrderStatusSelect={onOrderStatusSelect}
            state={state}
            orderStatus={orderStatus}
            setOrderStatus={setOrderStatus}
          />}
        </Elements>}

        {/* <Home/> */}


        {/* </FavoriteProvider> */}
        {/* <Twilio/> */}
        {/* <DishScroll2 dish={state} /> */}
        {/* {isFavOpen && <FavoriteDishes />} */}
        {/* <TableFloorMap/> */}
        {/* <MapContainer/> */}
        <Routes>
          <Route path='/' element={<Home dish={state} />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<MenuList dishes={state.dishes} categories={state.categories} favorites={favorites} />} />
          <Route path='/favorites' element={<FavoriteDishes addDish={addDish} />} />
          <Route path="/reservations" element={<ReservationProvider><Reservation /></ReservationProvider>} />
          <Route path="/order-now" element={<DishList dish={state} addDish={addDish} />} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
