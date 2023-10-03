import './App.css';
import UserList from './components/UserList';
import useApplicationData from './hooks/useApplicationData';
import Twilio from './components/Twilio';
import MenuList from './components/MenuList';

function App() {

  const {
    state
  } = useApplicationData();
  // console.log(state);

  return (
    <div className="App">
      <UserList users={state.users} />
      {/* <Twilio/> */}
      <MenuList/>
    </div>
  );
}

export default App;
