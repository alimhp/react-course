import { useReducer } from "react";

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

const CounterReducerTwo = () => {
  const [Count, Dispach] = useReducer(reducer, initialstate);
  const [CountTwo, DispachTwo] = useReducer(reducer, initialstate);

  return (
    <div>
      <h1>count is:{Count}</h1>
      <h1>count#2 is:{CountTwo}</h1>
      <button onClick={() => Dispach({ type: "add", value: 1 })}>
        click+1
      </button>

      <button onClick={() => Dispach({ type: "decrement", value: 1 })}>
        click-1
      </button>
      <button onClick={() => DispachTwo({ type: "add", value: 1 })}>
        click+1 #2
      </button>
      <button onClick={() => DispachTwo({ type: "decrement", value: 1 })}>
        click-1 #2
      </button>

      <button onClick={() => Dispach({ type: "reset" })}>reset</button>
      <button onClick={() => DispachTwo({ type: "reset" })}>reset#2</button>
    </div>
  );
};

export default CounterReducerTwo;
