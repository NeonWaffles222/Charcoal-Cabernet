import { useReducer, useEffect } from 'react';
import axios from 'axios';

function useApplicationData() {

  const inital = {
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

  const addDish = (dish) => {
    dispatch({ type: ACTIONS.ADD_DISH, payload: dish });
  };

  const removeDish = (id) => {
    dispatch({ type: ACTIONS.REMOVE_DISH, payload: { id } });
  };

  const emptyCart = () => {
    dispatch({ type: ACTIONS.EMPTY_CART });
  };


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

  //Post request for orders
  const createOrder = (user, selectedDishes) => {
    const orderData = {
      order: {
        user_id: user.id,
        order_items_attributes: selectedDishes.map((dish) => ({ dish_id: dish.id })),
        status: "pending",
        total_price: selectedDishes.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price), 0)
      },
    };

    axios
      .post('http://localhost:3001/orders', orderData)
      .then((response) => {
        console.log('Order created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating order:', error);
      });
  };

  return {
    state,
    onLoginSelect,
    onRegisterSelect,
    onOrderSelect,
    addDish,
    removeDish,
    createOrder,
    emptyCart
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
  EMPTY_CART: 'EMPTY_CART'
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
    case ACTIONS.REMOVE_DISH:
      const newArray = [...state.order];
      if (newArray.includes(action.payload.id)) {
        const index = newArray.indexOf(action.payload.id);
        newArray.splice(index, 1);
      }
      return { ...state, order: newArray }; 
    case ACTIONS.EMPTY_CART:
      return { ...state, order: [] 
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default useApplicationData;