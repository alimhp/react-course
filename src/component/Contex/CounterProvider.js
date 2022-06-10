import { createContext, useContext, useReducer, useState } from "react";

const CounterContex = createContext();
const CounterContexChamp = createContext();

const initialstate = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return (state = state + action.value);
    case "decrement":
      return (state = state - action.value);
    case "reset":
      return initialstate;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [count, Dispach] = useReducer(reducer, initialstate);
  return (
    <CounterContex.Provider value={count}>
      <CounterContexChamp.Provider value={Dispach}>
        {children}
      </CounterContexChamp.Provider>
    </CounterContex.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContex);

export const useCountAction = () => useContext(CounterContexChamp);

// const changeHandler = () => {
//   setCount((prevCount) => prevCount + 1);
// };

// const changeHandlerFive = () => {
//   setCount((prevCount) => prevCount + 5);
// };

// const Decrement = () => {
//   setCount((prevCount) => prevCount - 1);
// };
// return { changeHandler, changeHandlerFive ,Decrement};
