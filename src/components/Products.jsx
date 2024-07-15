import React from "react";
import Product from "./Product";
const products = [
  {
    id: 1,
    name: "cookware",
    urlImage:
      "https://i.pinimg.com/564x/fb/91/57/fb91570ebfa3594b99f7aa76913fa0f6.jpg",
    price: 120,
  },
  {
    id: 2,
    name: "Silicone",
    urlImage:
      "https://i.pinimg.com/564x/8d/47/aa/8d47aaa1d56fa6b326452ace698c2317.jpg",
    price: 200.0,
  },
  {
    id: 3,
    name: "Dinnerware Collection",
    urlImage:
      "https://i.pinimg.com/564x/b1/c2/94/b1c29464fbec739ef7aa35870a9b24be.jpg",
    price: 30.0,
  },
  {
    id: 4,
    name: "Tea Set",
    urlImage:
      "https://i.pinimg.com/564x/08/ce/8d/08ce8d6ba90cf2d68ab8f41bf88cfb75.jpg",
    price: 30.0,
  },
  {
    id: 5,
    name: "Cookware Set",
    urlImage:
      "https://i.pinimg.com/564x/ea/c0/3f/eac03f11d43eb4dd52a651534bd86239.jpg",
    price: 30.0,
  },
  {
    id: 6,
    name: "Kitchen Utensil Set",
    urlImage:
      "https://i.pinimg.com/564x/d6/b5/bf/d6b5bfac527f4228270fd6b4c38743c6.jpg",
    price: 20.0,
  },
];

const Products = () => {
  return (
    <div className="grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
