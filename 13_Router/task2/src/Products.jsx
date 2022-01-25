import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
      </ul>
      <Routes>
        <Route
          exact
          path="/products/"
          element={<span>Select a product please</span>}
        />

        <Route path="/products/:productId" component={<Product />} />
      </Routes>
    </div>
  );
};

export default Products;
