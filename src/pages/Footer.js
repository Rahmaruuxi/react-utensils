import React from "react";
import "../style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Kitchen Essentials is your premier destination for high-quality
            kitchen utensils and accessories. Our mission is to provide you with
            the finest selection of kitchen tools to make your cooking
            experience more enjoyable and efficient.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@kitchenessentials.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Kitchen Essentials | Designed by Kitchen Essentials Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
