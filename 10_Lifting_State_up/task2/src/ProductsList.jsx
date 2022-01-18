import React from "react";

const ProductsList = ({ cartItems }) => {
  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map((prod) => (
          <li key={prod.id} className="products__list-item">
            <span className="products__item-name">{prod.name}</span>
            <span className="products__item-price">{`$${prod.price}`}</span>
          </li>
        ))}
      </ul>
      <div className="products__total">{`Total: $${cartItems.reduce(
        (acc, prod) => acc.price + prod.price
      )}`}</div>
    </div>
  );
};
export default ProductsList;
