import React from "react";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/Money";
import CartItemDetails from "./CartItemDetails";
import DeliveryDate from "./DeliveryDate";
import axios from "axios";

function OrderSummary({ cart, deliveryOptions, cartData }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div key={cartItem.id} className="cart-item-container">
              <DeliveryDate
                deliveryOptions={deliveryOptions}
                cartItem={cartItem}
              />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} />

                <div className="delivery-options">
                  <div className="delivery-options-title">
                    Choose a delivery option:
                  </div>

                  {deliveryOptions.map((deliveryOption) => {
                    let shippingPriceString = "FREE Shipping";

                    if (deliveryOption.priceCents > 0) {
                      shippingPriceString = `${formatMoney(
                        deliveryOption.priceCents
                      )} - Shipping`;
                    }

                    const updateDeliveryOption = async () => {
                      await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: deliveryOption.id,
                      });

                      await cartData();
                    };

                    return (
                      <div
                        key={deliveryOption.id}
                        className="delivery-option"
                        onClick={updateDeliveryOption}
                      >
                        <input
                          type="radio"
                          checked={
                            deliveryOption.id === cartItem.deliveryOptionId
                          }
                          className="delivery-option-input"
                          name={`delivery-option-${cartItem.productId}`}
                          onChange={() => {}}
                        />
                        <div>
                          <div className="delivery-option-date">
                            {dayjs(
                              deliveryOption.estimatedDeliveryTimeMs
                            ).format("dddd, MMMM , D")}
                          </div>
                          <div className="delivery-option-price">
                            {shippingPriceString}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OrderSummary;
