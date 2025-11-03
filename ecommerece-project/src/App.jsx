import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<div>no</div>} />
      </Routes>
    </>
  );
}

export default App;
