import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./HomePage.css";
import homeIcon from "../../assets/images/home-favicon.png";
import ProductsGrid from "./ProductsGrid";

function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //here useEffect use for getting response from BE only at once.
    // otherwise respone come each time when page re-rendering
    //here .get is asynchronous code segment that mean it take times to fetch data.
    // so when using .then other codes are running without waiting and inside the code in .then will execute after data fetched
    const getHomeData = async () => {
      const response = await axios.get("api/products");
      setProducts(response.data);
    
    }
  
    getHomeData();
  }, []);

  return (
    <>
      <title>HomePage</title>
      <link rel="icon" type="image/svg+xml" src={homeIcon} />
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products}  />
      </div>
    </>
  );
}

export default HomePage;
