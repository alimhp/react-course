import React, { Component, useState } from "react";
import Hookcounter from "./component/product/hook/Hookcounter";
import Hookobject from "./component/product/hook/Hookobject";
import ProductList from "./component/product/ProductList";
import styles from "./App.module.css";
import Navigation from "./component/navbar/navigation";

class App extends Component {
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
  // for incremenet
  incrementHandler = (id) => {
    const product = [...this.state.product];
    const selectedItem = product.find((p) => p.id === id);
    selectedItem.quantity++;
    this.setState({ product: product });
  };
  changeHandler = (event, id) => {
    // console.log(event.target.value, id);
    const product = [...this.state.product];
    const selectedItem = product.find((p) => p.id === id);
    selectedItem.title = event.target.value;
    this.setState({ product: product });
  };
  dicresmentHandler = (id) => {
    const product = [...this.state.product];
    const selectedItem = product.find((p) => p.id === id);

    if (selectedItem.quantity === 1) {
      const filterItem = product.filter((p) => p.id !== id);
      this.setState({ product: filterItem });
    } else {
      selectedItem.quantity--;
      this.setState({ product: product });
    }
  };
  render() {
    return (
      <div className={styles.container}>
        <Navigation product={this.state.product} />
        <ProductList
          product={this.state.product}
          dicresmentHandler={this.dicresmentHandler}
          onChange={this.changeHandler}
          incrementHandler={this.incrementHandler}
          removeHandler={this.removeHandler}
        />
      </div>
    );
  }
}
export default App;
