import { createContext, useContext, useState } from "react";

const CounterContex = createContext();
const CounterContexChamp = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(3);
  return (
    <CounterContex.Provider value={count}>
      <CounterContexChamp.Provider value={setCount}>
        {children}
      </CounterContexChamp.Provider>
    </CounterContex.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContex);

export const useCountAction = () => {
  const setCount = useContext(CounterContexChamp);
  const changeHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const changeHandlerFive = () => {
    setCount((prevCount) => prevCount + 5);
  };

  const Decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return { changeHandler, changeHandlerFive ,Decrement};
};
