import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router";
import carticon from "../assets/images/icons/cart-icon.png";
import searchicon from "../assets/images/icons/search-icon.png";

function Header({ cart }) {

  const [searchParam] = useSearchParams();

  const search = searchParam.get('search');


  const [searchText, setSearchText] = useState(search || '');
  const navigate = useNavigate();

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search"

            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}

            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                    navigate(`/?search=${searchText}`);
              }
              

              if (event.key === 'Escape') {
                setSearchText("")
                navigate("/");
              }
            }
            
                            
            }
            
            

          />

          <button className="search-button" onClick={() => {
         
            navigate(`/?search=${searchText}`);
          }}
            
          >
            <img className="search-icon" src={searchicon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={carticon} />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
