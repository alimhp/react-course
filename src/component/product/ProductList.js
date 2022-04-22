import React, { Component } from "react";
import Product from "./product";

class ProductList extends Component {
  state = {
    product: [
      { title: "react.js", price: "99$", id: 1, quantity: 1 },
      { title: "java.js", price: "89$", id: 2, quantity: 2 },
      { title: "pay.js", price: "79$", id: 3, quantity: 3 },
    ],
  };
  //  for removing item
  removeHandler = (id) => {
    const filtering = this.state.product.filter((p) => p.id !== id);
    this.setState({ product: filtering });
  };
  render() {
    return (
      <div>
        {this.state.product.map((product, index) => {
          return (
            <Product
              // name={product.title}
              // price={product.price}
              // quantity={product.quantity}

              // use product(props) to have more space
              product={product}
              key={index}
              // for removing item
              onDelet={() => this.removeHandler(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
