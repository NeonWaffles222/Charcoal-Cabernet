import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import AuthProvider from './providers/AuthProvider';
import useApplicationData from './hooks/useApplicationData';

import TopNavigation from "./components/TopNavigationBar";
import Twilio from './components/Twilio';
import DishList from './components/DishList';
import DishScroll from './components/DishScroll';
import FavoriteDishes from './components/Favorites';
import OrderModal from './components/OrderModal';
import Footer from "./components/Footer";

import MenuList from './pages/Menu';
import About from './pages/About';
import Home from './pages/Home';

function App() {

  const {
    state,
    onLoginSelect,
    onRegisterSelect,
    onOrderSelect,
    addDish,
    removeDish,
    createOrder
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


  return (
    <Router className="App">
      <AuthProvider>
        <TopNavigation
          onLoginSelect={onLoginSelect}
          onRegisterSelect={onRegisterSelect} onOrderSelect={onOrderSelect}
          toggleMenu={toggleMenu}
          toggleFav={toggleFav}
          open={state.modal.open}

        />
        {state.modal.open === 'order' && <OrderModal onOrderSelect={onOrderSelect} state={state} createOrder={createOrder} />}
      </AuthProvider>
      {/* <Twilio/> */}
      {/* <DishScroll dish={state}/> */}
      {/* <DishList dish={state} addDish={addDish} /> */}
      {isFavOpen && <FavoriteDishes />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<MenuList dishes={state.dishes} categories={state.categories} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
