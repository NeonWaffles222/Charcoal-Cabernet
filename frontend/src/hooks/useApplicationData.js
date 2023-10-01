import { useReducer, useEffect } from 'react';
import axios from 'axios';

function useApplicationData() {

  const inital = {
    users: []
  };

  const [state, dispatch] = useReducer(reducer, inital);

  // Gets all user data
  useEffect(() => {
    axios.get(`http://localhost:3001/users.json`)
      .then(res => {
        // console.log('users', res.data);
        const users = res.data;
        dispatch({ type: ACTIONS.SET_USER_DATA, value: users });
      })
      .catch(error => {
        console.error('Error Fetching Users: ', error);
      });
  }, []);

  // Gets all category data
  useEffect(() => {
    axios.get(`http://localhost:3001/categories.json`)
      .then(res => {
        // console.log('categories', res.data);
        const categories = res.data;
        dispatch({ type: ACTIONS.SET_CATEGORY_DATA, value: categories });
      })
      .catch(error => {
        console.error('Error Fetching Categories: ', error);
      });
  }, []);

  // Gets all dish data
  useEffect(() => {
    axios.get(`http://localhost:3001/dishes.json`)
      .then(res => {
        // console.log('dishes', res.data);
        const dishes = res.data;
        dispatch({ type: ACTIONS.SET_DISH_DATA, value: dishes });
      })
      .catch(error => {
        console.error('Error Fetching Dishes: ', error);
      });
  }, []);

  // Get all table data
  useEffect(() => {
    axios.get(`http://localhost:3001/tables.json`)
      .then(res => {
        // console.log('tables', res.data);
        const tables = res.data;
        dispatch({ type: ACTIONS.SET_TABLE_DATA, value: tables });
      })
      .catch(error => {
        console.error('Error Fetching Tables: ', error);
      });
  }, []);

  return {
    state
  };
}

export const ACTIONS = {
  SET_USER_DATA: 'SET_USER_DATA',
  SET_CATEGORY_DATA: 'SET_CATEGORY_DATA',
  SET_DISH_DATA: 'SET_DISH_DATA',
  SET_TABLE_DATA: 'SET_TABLE_DATA'
};

function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.SET_USER_DATA:
      return {
        ...state,
        users: action.value
      };
    case ACTIONS.SET_CATEGORY_DATA:
      return {
        ...state,
        categories: action.value
      };
    case ACTIONS.SET_DISH_DATA:
      return {
        ...state,
        dishes: action.value
      };
    case ACTIONS.SET_TABLE_DATA:
      return {
        ...state,
        tables: action.value
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default useApplicationData;