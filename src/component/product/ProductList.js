import React, { Component } from "react";
import Product from "./product";

class ProductList extends Component {
  state = {
    product: [
      { title: "react.js", price: "99$" },
      { title: "java.js", price: "89$" },
      { title: "pay.js", price: "79$" },
    ],
  };
  render() {
    return (
      <div>
        {this.state.product.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              click={this.clickhandler}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
