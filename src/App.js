import React from "react";
import ProductList from "./component/product/ProductList";
import "./App.css";
import Navbar from "./component/navbar/navigation";
import Wrapper from "./component/Hoc/Wrapper";
import ProductsProvider from "./component/Providers/ProductsProvider";
import Filter from "./component/Filter/Filter";
import SearchBar from "./component/common/Search/Search";
// import Product from "./component/product/Product";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <SearchBar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
