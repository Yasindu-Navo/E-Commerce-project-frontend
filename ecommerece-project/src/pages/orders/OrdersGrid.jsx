import React, { Fragment } from 'react'
import { Link } from 'react-router';
import OrderHeader from './OrderHeader';
import OrderDetailsGrid from './OrderDetailsGrid';

function OrdersGrid({orders,cartData}) {
  return (
       <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
               
                    <OrderHeader order={order} />
                <OrderDetailsGrid order={order} cartData={cartData}/>
              </div>
            );
          })}
        </div>
  )
}

export default OrdersGrid