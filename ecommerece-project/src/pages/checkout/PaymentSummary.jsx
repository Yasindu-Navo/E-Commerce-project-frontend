import React from 'react'
import { formatMoney } from '../../utils/Money'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router';

function PaymentSummary({ paymentSummary, cartData }) {
  
  const navigate = useNavigate();
  
  const saveOrder = async () => {
    await axios.post('/api/orders');

   await cartData();
    navigate('/orders');


  }

  return (
  <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            {paymentSummary &&
              (
                  <>
            <div className="payment-summary-row">
              <div>Items ({paymentSummary.totalItems}):</div>
                  <div className="payment-summary-money">{formatMoney(paymentSummary.productCostCents) }</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">{formatMoney(paymentSummary.shippingCostCents) }</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
                  <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
                  <div className="payment-summary-money">{formatMoney(paymentSummary.taxCents)}</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
                  <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostCents)}</div>
            </div>

            <button className="place-order-button button-primary" onClick={saveOrder}>
              Place your order
                </button>
                </>
              )
            }

          </div>
  )
}

export default PaymentSummary