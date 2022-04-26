import styles from "./product.module.css";
const Product = (props) => {
  return (
    <div className={styles.product} onClick={props.click}>
      <p>product name :{props.product.title}course</p>
      <p>procut price:{props.product.price} </p>

      <span className={styles.value}>{props.product.quantity}</span>
      <input onChange={props.onChange} value={props.product.title} />
      {/* controled component ==> value={props.product.title} */}
      <button
        onClick={props.onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button
        onClick={props.onDicrement}
        className={`${styles.button} ${styles.inc}`}
      >
        -
      </button>

      {/* for removing item */}
      <button className={styles.button} onClick={props.onDelet}>
        delet
      </button>
    </div>
  );
};

export default Product;
