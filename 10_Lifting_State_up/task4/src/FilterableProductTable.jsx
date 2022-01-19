import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
  state = {
    filterText: "",
    inStockOnly: false,
  };

  handleFilterTextChange = (e) => {
    this.setState({
      filterText: e.target.value,
    });
  };

  handleInStockChange = (e) => {
    this.setState({
      inStockOnly: e.target.checked,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
