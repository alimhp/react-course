import React from "react";
import Product from "./product";
import { useProduct, useProductAction } from "../Providers/ProductsProvider";
const ProductList = () => {
  const product = useProduct();

  const dispatch = useProductAction();

  const renderProduct = () => {
    if (product.length === 0)
      return <div>There is no product in your cart</div>;

    return product.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
          onChange={(e) => dispatch({ type: "edit", id: product.id, event: e })}
          onDicrement={() => dispatch({ type: "decrement", id: product.id })}
          onIncrement={() => dispatch({ type: "increment", id: product.id })}
          onDelet={() => dispatch({ type: "remove", id: product.id })}
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
