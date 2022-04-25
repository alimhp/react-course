import React, { Component, useState } from "react";
import Hookcounter from "./component/product/hook/Hookcounter";
import Hookobject from "./component/product/hook/Hookobject";
import ProductList from "./component/product/ProductList";
import styles from "./App.module.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <h1>shoping App</h1>
        <ProductList />
      </div>
    );
  }
}
export default App;
