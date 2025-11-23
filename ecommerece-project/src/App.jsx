import axios from "axios";
import { useState, useEffect } from "react";

import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  
   const cartData = async () => {
      const response = await axios.get("api/cart-items?expand=product");
      setCart(response.data);
    };
  useEffect(() => {
    cartData();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} cartData={cartData} />} />
        <Route path="/" element={<HomePage cart={cart} cartData={cartData} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage cart={cart} />} />
        <Route
          path="/tracking/:orderId/:productId"
          element={<TrackingPage cart={cart} />}
        />
        <Route path="*" element={<NotFoundPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;



