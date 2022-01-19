import React from "react";

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr className="products__list">
      <td className="products__list-item">{name}</td>
      <td className="products__item-price">{product.price}</td>
    </tr>
  );
};

export default ProductRow;
