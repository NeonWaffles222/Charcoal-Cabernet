import './App.css';
import useApplicationData from './hooks/useApplicationData';
import AuthProvider from './providers/AuthProvider';
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
  //console.log(state.modal);

  return (
    <div className="App">
      <AuthProvider>
        <TopNavigation onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />
        {state.modal.open === 'login' && <LoginModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
        {state.modal.open === 'register' && <RegisterModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
