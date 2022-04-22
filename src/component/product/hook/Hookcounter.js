import { useState } from "react";
const Hookcounter = () => {
  const [count, setcount] = useState(0);
  const addonehandler = () => {
    setcount(count + 1);
  };
  const addtwohandler = () => {
    setcount(count + 2);
  };
  const addfivehandler = () => {
    setcount(count + 5);
  };
  return (
    <div>
      <h1>count-{count}</h1>
      <button onClick={addonehandler}>click+1</button>
      <button onClick={addtwohandler}>click+2</button>
      <button onClick={addfivehandler}>click+5</button>
    </div>
  );
};

export default Hookcounter;
