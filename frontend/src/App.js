import './App.css';
import React from 'react';
import UserList from './components/UserList';
import AuthProvider from './providers/AuthProvider';
import useApplicationData from './hooks/useApplicationData';
import Twilio from './components/Twilio';
import MenuList from './components/MenuList3';
import DishList from './components/DishList';
import TopNavigation from "./components/TopNavigationBar";
import Footer from "./components/Footer";
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import DishScroll from './components/DishScroll';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {

  const {
    state,
    onLoginSelect,
    onRegisterSelect
  } = useApplicationData();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // console.log(state);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <Router className="App">
      <AuthProvider>
        <TopNavigation
          onLoginSelect={onLoginSelect}
          onRegisterSelect={onRegisterSelect}
          toggleMenu={toggleMenu}
        />
        {state.modal.open === 'login' && <LoginModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
        {state.modal.open === 'register' && <RegisterModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
      </AuthProvider>
      {/* <UserList users={state.users} /> */}
      {/* <Twilio/> */}
      {/* <MenuList /> */}
      {/* <DishScroll dish={state}/> */}
      {/* <DishList dish={state}/> */}
      {/* <MenuList dishes={state.dishes} categories={state.categories}/> */}
      {/* Conditionally render the MenuList component in the main container */}
      {isMenuOpen && <MenuList dishes={state.dishes} categories={state.categories} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
