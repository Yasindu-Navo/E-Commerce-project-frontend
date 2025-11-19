import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header";
import "./OrdersPage.css";
import { Link } from "react-router";
import orderIcon from "../../assets/images/orders-favicon.png";
import axios from "axios";


import OrdersGrid from "./OrdersGrid";

function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get("api/orders?expand=products");
      setOrders(response.data);
    }
   
    fetchOrderData();
  });

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" src={orderIcon} />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

       <OrdersGrid orders={orders} />
      </div>
    </>
  );
}

export default OrdersPage;
