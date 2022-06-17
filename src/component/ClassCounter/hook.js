import { UseState } from "react";

export const Hookcounter = () => {
  const [count, setcount] = UseState(0);
  const addonehandler = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h1>count-{count}</h1>
      <button onClick={addonehandler}>add one</button>
    </div>
  );
};

export default Hookcounter;
