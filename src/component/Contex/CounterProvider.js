import { createContext, useState } from "react";

export const CounterContex = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(3);
  return (
    <CounterContex.Provider value={count}>{children}</CounterContex.Provider>
  );
};

export default CounterProvider;
