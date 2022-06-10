import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const Dispach = useCountAction();

  return (
    <div>
      <h2>count is:{count}</h2>
      <button onClick={() => Dispach({ type: "add", value: 1 })}>
        click+1
      </button>
      <button onClick={() => Dispach({ type: "reset" })}>reset</button>
      <button onClick={() => Dispach({ type: "decrement", value: 1 })}>
        click-1
      </button>
    </div>
  );
};

export default CounterOne;
