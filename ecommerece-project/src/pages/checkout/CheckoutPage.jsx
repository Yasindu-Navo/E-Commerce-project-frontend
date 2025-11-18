import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CheckoutHeader from "./CheckoutHeader";
import "./CheckoutPage.css";
import { Link } from "react-router";
import cartIcon from "../../assets/images/cart-favicon.png";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {

    const fetchCheckoutData = async () => {
      let respone = await axios.get("api/delivery-options?expand=estimatedDeliveryTime");
     
        setDeliveryOptions(respone.data);
   

      respone = await axios.get("api/payment-summary");
      setPaymentSummary(respone.data);
 
    }

    fetchCheckoutData();
   
  }, []);

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" src={cartIcon} />

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
