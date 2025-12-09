import React, { Fragment} from "react";
import dayjs from "dayjs";
import buyagain from "../../assets/images/icons/buy-again.png";
import { Link } from "react-router";
import axios from "axios";

function OrderDetailsGrid({ order,cartData }) {


  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        const addtoCart = async () => {
          await axios.post("/api/cart-items", {
            productId: orderProduct.product.id,
            quantity:1
          });

          await cartData();
        };
        return (
          <Fragment key={orderProduct.product.id}>
            <div className="product-image-container">
              <img src={orderProduct.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">{orderProduct.product.name}</div>
              <div className="product-delivery-date">
                Arriving on: {dayjs(order.orderTimeMs).format("MMMM D")}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.product.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src={buyagain} />
                <span className="buy-again-message" onClick={addtoCart}>
                  Add to Cart
                </span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default OrderDetailsGrid;
