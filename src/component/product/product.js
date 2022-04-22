import styles from "./product.module.css";
const Product = (props) => {
  return (
    <div className={styles.product} onClick={props.click}>
      <p>product name :{props.product.name}course</p>
      <p>procut price:{props.product.price} </p>

      <span className={styles.value}>{props.product.quantity}</span>

      <button className={`${styles.button} ${styles.inc}`}>increment</button>
      {/* <button clasname={`${style.button} ${style.inc}`}>increment</button> */}

      {/* for removing item */}
      <button className={styles.button} onClick={props.onDelet}>
        delet
      </button>
    </div>
  );
};

export default Product;
