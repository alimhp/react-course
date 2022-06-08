import { useContext } from "react";
import { CounterContex } from "./CounterProvider";

const CounterOne = () => {
  const count = useContext(CounterContex);
  return (
    <div>
      <h2>count is:{count}</h2>
    </div>
  );
};

export default CounterOne;
