import React from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header-store">
          Game Store
        </Link>
      </div>
      <div className="wrapper header-cart">
        <Cart />
      </div>
    </div>
  );
}

export default Header;
