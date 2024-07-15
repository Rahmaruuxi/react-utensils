import React from "react";
import { Link } from "react-router-dom";
import useShop from "../ShopContext";
import "../style.css";

const Header = () => {
  const { products } = useShop();
  return (
    <div className="menu">
      <Link to="/" className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/8790/8790945.png"
          style={{ width: "40px" }}
        />{" "}
        UtensilShop
      </Link>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/cart">Cart </Link>
      </div>
      <Link to="/cart">
        <span className="cart">{products.length}</span>
      </Link>
    </div>
  );
};

export default Header;
