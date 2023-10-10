import React, { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import '../styles/OrderModal.scss';
import PastOrders from "../components/PastOrders"
import '../styles/PastOrderModal.scss'


const PastOrderModal = (props) => {

  const { user } = useContext(authContext);

  //Filter out all orders that are not associated with the logged in user
  const userOrders=props.state.orders.filter((order)=>{
    return order.user_id === user.id 
  })

  //From most recent order to least
  userOrders.reverse();

  return (
    <div className="modal">
      <div className="modal-content">
        <form>
          <section className="orders-show">
            <div className="exit-flex">
              <button className="order-modal__close" onClick={() => props.onPastOrderSelect()}>X</button>
            </div>
            <div className="panel panel-default items">
              <table className="table">
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
          </section>
        </form>
      </div>
    </div>
  );
};

export default PastOrderModal;