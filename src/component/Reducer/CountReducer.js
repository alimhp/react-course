import { useReducer, useState } from "react";

const initialstate = {
  FirstCounter: 0,
  SecondCounter: 0,
};
const reduser = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, FirstCounter: state.FirstCounter + action.value };
    case "decrement":
      return { ...state, FirstCounter: state.FirstCounter - action.value };
    case "reset":
      return initialstate;
    case "add#2":
      return { ...state, SecondCounter: state.SecondCounter + action.value };
    case "decrement#2":
      return { ...state, SecondCounter: state.SecondCounter - action.value };

    default:
      return state;
  }
};

const CountReducer = () => {
  const [Count, Dispach] = useReducer(reduser, initialstate);

  return (
    <div>
      <h1>count is:{Count.FirstCounter}</h1>
      <h1>count#2 is:{Count.SecondCounter}</h1>
      <button onClick={() => Dispach({ type: "add", value: 1 })}>
        click+1
      </button>

      <button onClick={() => Dispach({ type: "decrement", value: 1 })}>
        click-1
      </button>
      <button onClick={() => Dispach({ type: "add#2", value: 1 })}>
        click+1 #2
      </button>
      <button onClick={() => Dispach({ type: "decrement#2", value: 1 })}>
        click-1 #2
      </button>

      <button onClick={() => Dispach({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CountReducer;
