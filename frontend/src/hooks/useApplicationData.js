import { useReducer, useEffect } from 'react';
import axios from 'axios';

function useApplicationData() {

  const inital = {
    users: [],
    categories: [],
    dishes: [],
    tables: [],
    modal: {
      open: null,
    },
    order: [],

  };

  const [state, dispatch] = useReducer(reducer, inital);

  const onLoginSelect = () => {
    (state.modal.open === 'login') ?
      dispatch({ type: ACTIONS.CLOSE_MODAL, value: { open: null } }) :
      dispatch({ type: ACTIONS.OPEN_MODAL, value: { open: 'login' } });
  };

  const onRegisterSelect = () => {
    (state.modal.open === 'register') ?
      dispatch({ type: ACTIONS.CLOSE_MODAL, value: { open: null } }) :
      dispatch({ type: ACTIONS.OPEN_MODAL, value: { open: 'register' } });
  };

  const onOrderSelect = () => {
    (state.modal.open === 'order') ?
      dispatch({ type: ACTIONS.CLOSE_MODAL, value: { open: null } }) :
      dispatch({ type: ACTIONS.OPEN_MODAL, value: { open: 'order' } });
  };

  const addDish =(id) => {
    dispatch({type: ACTIONS.ADD_DISH, payload: { id } })
  };

  const removeDish =(id) => {
    dispatch({type: ACTIONS.REMOVE_DISH, payload: {id}})
  };

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
    state,
    onLoginSelect,
    onRegisterSelect,
    onOrderSelect,
    addDish,
    removeDish,
  };
}

export const ACTIONS = {
  SET_USER_DATA: 'SET_USER_DATA',
  SET_CATEGORY_DATA: 'SET_CATEGORY_DATA',
  SET_DISH_DATA: 'SET_DISH_DATA',
  SET_TABLE_DATA: 'SET_TABLE_DATA',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  ADD_DISH: 'ADD_DISH',
  REMOVE_DISH: 'REMOVE_DISH',

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
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        modal: action.value
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        modal: action.value
      };
      case ACTIONS.ADD_DISH:
        const updatedOrder = [...state.order, action.payload];
        return {
          ...state, order: updatedOrder,
        };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default useApplicationData;