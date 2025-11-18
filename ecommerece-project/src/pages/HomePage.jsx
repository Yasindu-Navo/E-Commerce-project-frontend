import React from "react";
import axios from "axios"
import { useEffect,useState } from "react";
import Header from "../components/Header";

import "./HomePage.css";
import checkmark from "../assets/images/icons/checkmark.png";
import homeIcon from "../assets/images/home-favicon.png";


function HomePage({cart}) {
  const [products, setProducts] = useState([]);



  useEffect(() => { //here useEffect use for getting response from BE only at once.
    // otherwise respone come each time when page re-rendering
    
    //here .get is asynchronous code segment that mean it take times to fetch data.
    // so when using .then other codes are running without waiting and inside the code in .then will execute after data fetched
    axios.get("api/products").then((response) => {
  
    setProducts(response.data)  
    })
    
   
},[])


  return (


    <>
      <title>HomePage</title>
      <link rel="icon" type="image/svg+xml" src={homeIcon} />
      <Header cart = {cart} />

      <div className="home-page">
        <div className="products-grid">
          {/* convert each product into Html */}
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    alt="product-image"
                    src={product.image}
                  />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${
                      product.rating.stars * 10
                    }.png`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">${ (product.priceCents/100).toFixed(2) }</div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src={checkmark} />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
