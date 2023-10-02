import './App.css';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';

function App() {

  const {
    state
  } = useApplicationData();
  console.log(state);

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
}

export default App;
