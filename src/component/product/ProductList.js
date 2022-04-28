import React, { Component } from "react";
import Product from "./product";

class ProductList extends Component {
  render() {
    // to show nothing in shopping box #1
    if (this.props.product.length === 0)
      return <div>there is nothing here</div>;
    return (
      <div>
        {this.props.product.map((product, index) => {
          return (
            <Product
              // use product(props) to have more space
              product={product}
              key={index}
              // for removing item
              onDelet={() => this.props.removeHandler(product.id)}
              // for increament
              onIncrement={() => this.props.incrementHandler(product.id)}
              //change button
              onChange={(e) => this.props.changeHandler(e, product.id)}
              // dicresmenting quantity
              onDicrement={() => this.props.dicresmentHandler(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
