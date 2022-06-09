import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const { changeHandler, changeHandlerFive, Decrement } = useCountAction();

  return (
    <div>
      <h2>count is:{count}</h2>
      <button onClick={changeHandler}>click+1</button>
      <button onClick={changeHandlerFive}>click+5</button>
      <button onClick={Decrement}>click-1</button>
    </div>
  );
};

export default CounterOne;
