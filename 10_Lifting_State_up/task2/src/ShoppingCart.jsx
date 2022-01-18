import React, { Component } from "react";
import CartTitle from "./CartTitle";
import ProductsList from "./ProductsList";

class ShoppingCart extends Component {
  state = {
    cartItems: [
      { id: "2", name: "iPad Pro", price: 799 },
      { id: "3", name: "iPhone", price: 400 },
    ],
  };

  render() {
    return (
      <div className="column">
        <CartTitle
          userName={this.props.userName}
          count={this.state.cartItems.length}
        />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}
export default ShoppingCart;
