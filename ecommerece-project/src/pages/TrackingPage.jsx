import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import "./TrackingPage.css";
import { Link } from "react-router";

import trackingIcon from "../assets/images/tracking-favicon.png";
import axios from "axios";
import dayjs from "dayjs";

function TrackingPage({ cart }) {
  const params = useParams();
  console.log(params);
  const { orderId, productId } = useParams();
  const [orderTrackingData, setOrderTrackingData] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrderTrackingData(response.data);
    };

    fetchTrackingData();
  }, [orderId]);

  if (!orderTrackingData) {
    return null;
  }

  const orderProduct = orderTrackingData.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/svg+xml" src={trackingIcon} />

      <Header cart={cart} />

      <div class="tracking-page">
        <div class="order-tracking">
          <Link class="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div class="delivery-date">Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')} </div>

          <div class="product-info">
            { orderProduct.product.name}
          </div>

          <div class="product-info">{orderProduct.quantity}</div>

          <img
            class="product-image"
            src={orderProduct.product.image}
          />

          <div class="progress-labels-container">
            <div class="progress-label">Preparing</div>
            <div class="progress-label current-status">Shipped</div>
            <div class="progress-label">Delivered</div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingPage;
