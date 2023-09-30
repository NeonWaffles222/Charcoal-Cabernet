import { useReducer, useEffect } from 'react';
import axios from 'axios';

function useApplicationData() {

  const inital = {
    users: []
  };

  const [state, dispatch] = useReducer(reducer, inital);


  useEffect(() => {
    console.log('axios request');
    axios.get(`http://localhost:3001/users.json`)
      .then(res => {
        const users = res.data;
        dispatch({ type: ACTIONS.SET_USER_DATA, value: users });
      })
      .catch(error => {
        console.error('Error Fetching Users: ', error);
      });
  }, []);

  return {
    state
  };
}

export const ACTIONS = {
  SET_USER_DATA: 'SET_USER_DATA'
};

function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.SET_USER_DATA:
      return {
        ...state,
        users: action.value
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default useApplicationData;