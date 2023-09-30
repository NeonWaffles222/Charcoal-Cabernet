import { useReducer, useEffect } from 'react';

function useApplicationData() {

  let inital = {

  };

  const [state, dispatch] = useReducer(reducer, inital);

  useEffect(() => {
    fetch('http://localhost:3001/users.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({ type: ACTIONS.SET_USER_DATA, value: data });
      })
      .catch(error => {
        console.error('Error Fetching users: ', error);
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