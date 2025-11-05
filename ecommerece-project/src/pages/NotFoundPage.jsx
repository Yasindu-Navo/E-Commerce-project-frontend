import React from "react";
import Header from "../components/Header";
import "./PageNotFound.css";

function NotFoundPage() {
  return (
    <>
      <title>404</title>
      <Header />
      <p
        className="message"
       
      >
        404 Page not Found
      </p>
    </>
  );
}

export default NotFoundPage;
