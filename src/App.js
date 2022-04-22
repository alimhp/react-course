import React, { Component, useState } from "react";
import Hookcounter from "./component/product/hook/Hookcounter";
import Hookobject from "./component/product/hook/Hookobject";
import "./App.css";
import ProductList from "./component/product/ProductList";

class App extends Component {
  state = {};
  clickhandler = () => {
    this.setState({
      product: [
        { title: "react.js", price: "89$" },
        { title: "JavaScript", price: "79$" },
        { title: "pay.js", price: "69$" },
      ],
    });
  };
  render() {
    return (
      <div className="container">
        <h1>shoping App</h1>
        <ProductList />
        <button onClick={this.clickhandler}>change price</button>
      </div>
    );
  }
}
export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="container" id="title">
//         <h1>shoping App</h1>
//         <Product name="react.js" price="99$" />
//         <Product name="node.js" price="89$" />
//         <Product name="javascript" price="79$" />
//       </div>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div className="container" id="title">
//       <h1>shoping App</h1>
//       <Product name="react.js" price="99$" />
//       <Product name="node.js" price="89$" />
//       <Product name="javascript" price="79$" />
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>shoping </h1>

//       <Product />
//     </div>
//   );
// }

// function component
// const App = () => {
//   const [products, setproduts] = useState([
//     { title: "react.js", price: "99$" },
//     { title: "java.js", price: "89$" },
//     { title: "paython.js", price: "79$" },
//   ]);
//   const clickhandler = () => {
//     setproduts([
//       { title: "react.js", price: "89$" },
//       { title: "java.js", price: "79$" },
//       { title: "paython.js", price: "69$" },
//     ]);
//   };
//   return (
//     <div className="App">
//       <h1>shoping </h1>
//       {products.map((product) => {
//         return <Product name={product.title} price={product.price} />;
//       })}
//       <button onClick={clickhandler}>change price</button>
//     </div>
//   );
// };
