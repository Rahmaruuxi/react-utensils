import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="home-description">
        <h1>Welcome to UtensilShop</h1>
        <p>
          Welcome to UtensilShop, your top source for kitchen essentials. We
          offer a wide range of high-quality utensils with a focus on durability
          and customer satisfaction.
        </p>
      </div>
      <Products />
    </>
  );
};

export default Home;
