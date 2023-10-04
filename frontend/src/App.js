import './App.css';
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
import OrderModal from './components/OrderModal';


import { useState } from 'react';

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

  // console.log(state);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="App">
      <AuthProvider>
        <TopNavigation 
        onLoginSelect={onLoginSelect} 
        onRegisterSelect={onRegisterSelect} onOrderSelect={onOrderSelect} 
        toggleMenu={toggleMenu}
        />

        {state.modal.open === 'login' && <LoginModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}

        {state.modal.open === 'register' && <RegisterModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}

        {state.modal.open === 'order' && <OrderModal onOrderSelect={onOrderSelect} state={state} createOrder={createOrder}/>}
      </AuthProvider>
      {/* <UserList users={state.users} /> */}
      {/* <Twilio/> */}
      {/* <MenuList /> */}
      {/* <DishScroll dish={state}/> */}
      <DishList dish={state} addDish={addDish} /> 
      <MenuList dishes={state.dishes} categories={state.categories}/>
      {/* Conditionally render the MenuList component in the main container */}
      {isMenuOpen && <MenuList dishes={state.dishes} categories={state.categories} />}
      <Footer />
    </div>
  );
}

export default App;
