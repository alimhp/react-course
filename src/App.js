import React, { Component, createContext, useState } from "react";
import Hookcounter from "./component/product/hook/Hookcounter";
import Hookobject from "./component/product/hook/Hookobject";
import ProductList from "./component/product/ProductList";
import "./App.css";
import Navigation from "./component/navbar/navigation";
import FunctionalTimer from "./component/timer/FunctionalTimer";
import Functionalcounter from "./component/Functionalcounter";
import ClassTimer from "./component/timer/ClassTimer";
import CounterProvider from "./component/Contex/CounterProvider";
import CounterOne from "./component/Contex/CounterOne";
import Wrapper from "./component/Hoc/Wrapper";
import CountReducer from "./component/Reducer/CountReducer";
import CounterReducerTwo from "./component/Reducer/CounterReducerTwo";

const App = () => {
  const [product, setProduct] = useState([
    { title: "react.js", price: "99$", id: 1, quantity: 1 },
    { title: "java.js", price: "89$", id: 2, quantity: 2 },
    { title: "pay.js", price: "79$", id: 3, quantity: 3 },
  ]);
  const removeHandler = (id) => {
    const FilterProduct = product.filter((p) => p.id !== id);

    setProduct(FilterProduct);
  };
  const incrementHandler = (id) => {
    const productUpdated = [...product];
    const selectedItem = productUpdated.find((p) => p.id === id);
    selectedItem.quantity++;
    setProduct(productUpdated);
  };
  const changeHandler = (event, id) => {
    // console.log(event.target.value, id);
    const productUpdated = [...product];
    const selectedItem = productUpdated.find((p) => p.id === id);
    selectedItem.title = event.target.value;
    setProduct(productUpdated);
  };
  const dicresmentHandler = (id) => {
    const productUpdated = [...product];
    const selectedItem = productUpdated.find((p) => p.id === id);

    if (selectedItem.quantity === 1) {
      const filterItem = productUpdated.filter((p) => p.id !== id);
      setProduct(filterItem);
    } else {
      selectedItem.quantity--;
      setProduct(productUpdated);
    }
  };
  return (
    <>
      <Navigation product={product} />
      <ProductList
        product={product}
        dicresmentHandler={dicresmentHandler}
        onChange={changeHandler}
        incrementHandler={incrementHandler}
        removeHandler={removeHandler}
      />
    </>
  );
};

export default Wrapper(App, "container");
