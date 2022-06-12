import { useProduct } from "../Providers/ProductsProvider";
import styles from "./navbar.module.css";

const Navbar = () => {
  const product = useProduct();
  const totalItems = product.filter((p) => p.quantity > 0).length;

  return (
    <header className={styles.navbar}>
      <h2>fronthooks.ir shopping</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default Navbar;
