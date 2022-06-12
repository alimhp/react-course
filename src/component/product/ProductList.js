import React from "react";
import Product from "./product";
import { useProduct, useProductAction } from "../Providers/ProductsProvider";

const ProductList = () => {
  const product = useProduct();

  const { removeHandler, incrementHandler, changeHandler, dicresmentHandler } =
    useProductAction();

  const renderProduct = () => {
    if (product.length === 0)
      return <div>There is no product in your cart</div>;

    return product.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
          onChange={(e) => changeHandler(e, product.id)}
          onDicrement={() => dicresmentHandler(product.id)}
          onIncrement={() => incrementHandler(product.id)}
          onDelet={() => removeHandler(product.id)}
        />
      );
    });
  };
  return (
    <div>
      {!product.length && <div>Go to shopping</div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
