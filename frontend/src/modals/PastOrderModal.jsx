import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import '../styles/OrderModal.scss';
import OrderList from "../components/OrderList";
import PastOrders from "../components/PastOrders"
import '../styles/PastOrderModal.scss'


const PastOrderModal = (props) => {

  const { auth, user, logout, order } = useContext(authContext);

  //Filter out all orders that are not associated with the logged in user
  const userOrders=props.state.orders.filter((order)=>{
    return order.user_id === user.id 
  })

  //From most recent order to least
  userOrders.reverse();


  const filteredOrderedDishes = props.state.orders.filter((item)=>{
    // console.log("this is item", item)
    // console.log("order ids", props.state.orders)
    // return item.id === props.state.orders.id
  })

  // console.log(filteredOrderedDishes)

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
                    <th colSpan="0.25">Order Number</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {userOrders.map((order_object, index) => (  
                    <PastOrders
                      key={index}
                      order={order_object}
                      state={props.state}
                      onPastOrderSelect={props.onPastOrderSelect}
                    />
                  ))}
                </tbody>
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