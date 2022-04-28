import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({ product, onChange, onIncrement, onDicrement, onDelet }) => {
  return (
    <div className={styles.product}>
      <p>product name :{product.title}course</p>
      <p>procut price:{product.price} </p>

      <span className={styles.value}>{product.quantity}</span>
      <input onChange={onChange} value={product.title} />
      {/* controled component ==> value={product.title} */}
      <button
        onClick={onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button
        onClick={onDicrement}
        className={`${styles.button} 
          ${product.quantity === 1 ? styles.remove : null}`}
        // or we can do this
        // ${product.quantity === 1 && styles.remove}`
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>

      {/* for removing item */}
      <button className={styles.button} onClick={onDelet}>
        delet
      </button>
    </div>
  );
};

export default Product;
