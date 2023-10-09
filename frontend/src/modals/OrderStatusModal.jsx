import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import PreviousOrderStatus from "../components/PreviousOrderStatus";
import '../styles/OrderStatusModal.scss'


const OrderStatusModal = (props) => {

  let userOrders = [props.state.orders[(props.state.orders.length - 1)]];
  // console.log(userOrders)
  console.log(props, "Order status modal");
  return (
    <div className="modal">
      <div className="modal-content">
        <form>
            <div className="exit-flex">
              <button className="order-modal__close" onClick={() => props.onOrderStatusSelect()}>X</button>
            </div>
          <section className="orders-show">
            <div className="panel panel-default items">
              <table className="table">
                <div><strong className="title">Your Order Status</strong></div>
                <tbody className="title-padding">
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
          </section>
        </form>
      </div>
    </div>
  );
};

export default OrderStatusModal;