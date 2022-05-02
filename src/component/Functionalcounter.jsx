import React, { Component, useEffect, useState } from "react";

const Functionalcounter = () => {
  const [name, setname] = useState("");
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("document title updating");
    document.title = `clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input value={name} onChange={(e) => setname(e.target.value)}></input>

      <button onClick={() => setcount(count + 1)}>Click:{count}</button>
    </div>
  );
};

export default Functionalcounter;
