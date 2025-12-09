import React, {  useState } from "react";
import { formatMoney } from "../../utils/Money";
import axios from "axios";

function CartItemDetails({ cartItem, cartData }) {

  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem =async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);

    await cartData();

  }

  
  const updateQuantity = async () =>  {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity:Number(quantity)
    });

    await cartData();
  }

  const handleUpdate = () => {
    if (isUpdatingQuantity) {

      updateQuantity();


      setIsUpdatingQuantity(false)
    } else {
      setIsUpdatingQuantity(true)
    }
  }


  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            
            Quantity:{isUpdatingQuantity ?
              <input type="text" className="quantity-textbox" value={quantity} onChange={(event) => {
                setQuantity(event.target.value)
              }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleUpdate();
                  }
                  
                  if (event.key === 'Escape') {
                    setQuantity(cartItem.quantity);
                    setIsUpdatingQuantity(false);
                  }
              }}
              ></input> :
                <span className="quantity-label">{cartItem.quantity}</span>  }   
            
          </span>
          <span className="update-quantity-link link-primary" onClick={handleUpdate}>Update</span>
          <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>Delete</span>
        </div>
      </div>
    </>
  );
}

export default CartItemDetails;
