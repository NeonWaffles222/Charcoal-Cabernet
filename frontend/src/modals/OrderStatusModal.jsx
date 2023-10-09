import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import '../styles/LoginModal.scss';
import PreviousOrderStatus from "../components/PreviousOrderStatus";

const OrderStatusModal = (props) => {

  let userOrders = [props.state.orders[(props.state.orders.length - 1)]];
  // console.log(userOrders)
  console.log(props, "Order status modal");
  return (
    <div className="modal">
      <div className="modal-content">
        <form>
          <section className="orders-show">
            <div className="exit-flex">
              <button className="order-modal__close" onClick={() => props.onOrderStatusSelect()}>X</button>
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
                    <PreviousOrderStatus
                      key={index}
                      order={order_object}
                      state={props.state}
                      onPastOrderSelect={props.onPastOrderSelect}
                      orderStatus={props.orderStatus}
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

export default OrderStatusModal;