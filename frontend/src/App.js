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


function App() {

  const {
    state,
    onLoginSelect,
    onRegisterSelect
  } = useApplicationData();
  // console.log(state);

  return (
    <div className="App">
      <AuthProvider>
        <TopNavigation onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />
        {state.modal.open === 'login' && <LoginModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
        {state.modal.open === 'register' && <RegisterModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
      </AuthProvider>
      {/* <UserList users={state.users} /> */}
      {/* <Twilio/> */}
      {/* <DishList dish={state}/> */}
      <MenuList dishes={state.dishes}/>
      <Footer />
    </div>
  );
}

export default App;
