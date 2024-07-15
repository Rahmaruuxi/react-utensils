import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./ShopContext";

import App from "./App";
import Footer from "./pages/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopProvider>
    <BrowserRouter>
      <App />
      <Footer />
    </BrowserRouter>
  </ShopProvider>
);
