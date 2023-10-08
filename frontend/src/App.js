import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import { useState } from 'react';
import TableFloorMap from './components/TableFloorMap';
import './App.css';
import FavoriteProvider from './providers/FavoriteProvider';
import AuthProvider from './providers/AuthProvider';
import useApplicationData from './hooks/useApplicationData';

import TopNavigation from "./components/TopNavigationBar";
import Twilio from './components/Twilio';
import DishList from './components/DishList';
import DishScroll from './components/DishScroll';
import FavoriteDishes from './components/Favorites';
import OrderModal from './modals/OrderModal';
import Footer from "./components/Footer";

import MenuList from './components/MenuList';
import About from './pages/About';
import Home from './pages/Home';
import PaymentModal from './modals/PaymentModal';
import PastOrderModal from './modals/PastOrderModal';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import axios from 'axios';


function App() {

  const [client, setClient] = useState("");

  useEffect(() => {
    axios.post("/create_payment_intent")
      .then((res) => {
        // console.log("res", res);
        setClient(res.data);
      }
      );
  }, []);


  const {
    state,
    onLoginSelect,
    onRegisterSelect,
    onOrderSelect,
    onPastOrderSelect,
    onPaymentSelect,
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
    <Router className="App">
      {/* <FavoriteProvider> */}
      <AuthProvider>
        {client && <Elements stripe={initStripe} options={{ clientSecret: client }}>
          <TopNavigation
            onLoginSelect={onLoginSelect}
            onRegisterSelect={onRegisterSelect}
            onOrderSelect={onOrderSelect}
            onPastOrderSelect={onPastOrderSelect}
            toggleMenu={toggleMenu}
            toggleFav={toggleFav}
            open={state.modal.open}
            state={state}
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
        </Elements>}
      </AuthProvider>
    {/* </FavoriteProvider> */}
      {/* <Twilio/> */}
      {/* <DishScroll dish={state} />
      <DishList dish={state} addDish={addDish} /> */}
      {/* {isFavOpen && <FavoriteDishes />} */}
      <TableFloorMap/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<MenuList dishes={state.dishes} categories={state.categories} />} />
        <Route path='/favorites' element={<FavoriteDishes/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
