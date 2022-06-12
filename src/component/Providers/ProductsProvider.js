import { createContext, useContext, useState } from "react";

const productContex = createContext();
const productContexDispatcher = createContext();

const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState([
    { title: "react.js", price: "99$", id: 1, quantity: 1 },
    { title: "java.js", price: "89$", id: 2, quantity: 2 },
    { title: "pay.js", price: "79$", id: 3, quantity: 3 },
  ]);
  return (
    <productContex.Provider value={product}>
      <productContexDispatcher.Provider value={setProduct}>
        {children}
      </productContexDispatcher.Provider>
    </productContex.Provider>
  );
};

export default ProductsProvider;

export const useProduct = () => useContext(productContex);

export const useProductAction = () => {
  const setProduct = useContext(productContexDispatcher);
  const product = useContext(productContex);

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
  return { removeHandler, incrementHandler, changeHandler, dicresmentHandler };
};
