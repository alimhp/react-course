import { Component } from "react";
import styles from "./navbar.module.css";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <header className={styles.navbar}>
        <h1>number of your item :</h1> <span>{this.props.product.length}</span>
      </header>
    );
  }
}

export default Navigation;
