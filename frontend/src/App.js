import './App.css';
import UserList from './components/UserList';
import useApplicationData from './hooks/useApplicationData';
import Twilio from './components/Twilio';

function App() {

  const {
    state
  } = useApplicationData();
  console.log(state);

  return (
    <div className="App">
      <UserList users={state.users} />
      {/* <Twilio/> */}
    </div>
  );
}

export default App;
