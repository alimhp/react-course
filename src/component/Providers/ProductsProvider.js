import React, { useContext, useReducer } from "react";
import { productsData } from "../db/Products";
// const productContex = createContext();
// const productContexDispatcher = createContext();

// const ProductsProvider = ({ children }) => {
//   const [product, setProduct] = useState([
//     { title: "react.js", price: "99$", id: 1, quantity: 1 },
//     { title: "java.js", price: "89$", id: 2, quantity: 2 },
//     { title: "pay.js", price: "79$", id: 3, quantity: 3 },
//   ]);
//   return (
//     <productContex.Provider value={product}>
//       <productContexDispatcher.Provider value={setProduct}>
//         {children}
//       </productContexDispatcher.Provider>
//     </productContex.Provider>
//   );
// };

// export default ProductsProvider;

// export const useProduct = () => useContext(productContex);

// export const useProductAction = () => {
//   const setProduct = useContext(productContexDispatcher);
//   const product = useContext(productContex);

//   const removeHandler = (id) => {
//     const FilterProduct = product.filter((p) => p.id !== id);

//     setProduct(FilterProduct);
//   };
//   const incrementHandler = (id) => {
//     const productUpdated = [...product];
//     const selectedItem = productUpdated.find((p) => p.id === id);
//     selectedItem.quantity++;
//     setProduct(productUpdated);
//   };
//   const changeHandler = (event, id) => {
//     // console.log(event.target.value, id);
//     const productUpdated = [...product];
//     const selectedItem = productUpdated.find((p) => p.id === id);
//     selectedItem.title = event.target.value;
//     setProduct(productUpdated);
//   };
//   const dicresmentHandler = (id) => {
//     const productUpdated = [...product];
//     const selectedItem = productUpdated.find((p) => p.id === id);

//     if (selectedItem.quantity === 1) {
//       const filterItem = productUpdated.filter((p) => p.id !== id);
//       setProduct(filterItem);
//     } else {
//       selectedItem.quantity--;
//       setProduct(productUpdated);
//     }
//   };
//   return { removeHandler, incrementHandler, changeHandler, dicresmentHandler };
// };

const ProductContext = React.createContext(); // state
const ProductContextDispatcher = React.createContext(); // setState

// const initialState = [
//   { title: "React.js", price: "99 $", id: 1, quantity: 1 },
//   { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
//   { title: "JavaScript", price: "79 $", id: 3, quantity: 3 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        const updatedProducts = [...state];
        product.quantity--;
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }

    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      console.log(index);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "remove": {
      const fiteredProducts = state.filter((p) => p.id !== action.id);
      return fiteredProducts;
    }
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [product, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductContext.Provider value={product}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProduct = () => useContext(ProductContext);

export const useProductAction = () => useContext(ProductContextDispatcher);
