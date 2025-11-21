import React from "react";
import Header from "../components/Header";
import "./PageNotFound.css";

function NotFoundPage( {cart}) {
  return (
    <>
      <title>404</title>
      <Header cart={ cart} />
      <p
        className="message"
       
      >
        404 Page not Found
      </p>
    </>
  );
}

export default NotFoundPage;
