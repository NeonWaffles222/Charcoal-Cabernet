import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import '../styles/OrderModal.scss';
import OrderList from "../components/OrderList";


const PastOrderModal = (props) => {

  const { auth, user, logout, order } = useContext(authContext);

  let totalPrice = props.state.order.reduce((acc, dish) => {
    return Number(acc) + Number(dish.price);
  }, 0);



  const userOrders=props.state.orders.filter((order)=>{
    return order.user_id === user.id 
  })
  // console.log(userOrders)

  return (
    <div className="modal">
      <div className="modal-content">
        <form>
          <section className="orders-show">
            <div className="exit-flex">
              <button className="order-modal__close" onClick={() => props.onPastOrderSelect()}>X</button>
            </div>
            <div className="panel panel-default items">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan="3">Dish</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {userOrders.map((dish, index) => (
                    <OrderList
                      key={index}
                      dish={dish}
                      dishes={props.state.dish}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="4">TOTAL:</th>
                    <th>{totalPrice.toFixed(2)}</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <a onClick={props.onPastOrderSelect} className="back-to-dishes">
              Back to Dishes
            </a>
          </section>
        </form>
      </div>
    </div>
  );
};

export default PastOrderModal;