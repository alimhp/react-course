import React from "react";
import ProductList from "./component/product/ProductList";
import "./App.css";
import Navbar from "./component/navbar/navigation";
import Wrapper from "./component/Hoc/Wrapper";
import ProductsProvider from "./component/Providers/ProductsProvider";
// import Product from "./component/product/Product";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
