import style from "./product.module.css";
const Product = (props) => {
  return (
    <div className={style.product} onClick={props.click}>
      <p>product name :{props.name}course</p>
      <p>procut price:{props.price} </p>
    </div>
  );
};

export default Product;
