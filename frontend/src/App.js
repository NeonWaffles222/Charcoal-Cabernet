import './App.css';
import UserList from './components/UserList';
import useApplicationData from './hooks/useApplicationData';
import Twilio from './components/Twilio';
import DishListItem from './components/DishListItem';
import DishList from './components/DishList';

function App() {

  const {
    state
  } = useApplicationData();
  // console.log(state);

  return (
    <div className="App">
      <UserList users={state.users} />
      {/* <Twilio/> */}
      {/* <DishListItem dish={state}/> */}
      {/* <DishList dish={state}/> */}
    </div>
  );
}

export default App;
