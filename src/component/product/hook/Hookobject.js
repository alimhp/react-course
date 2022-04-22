import { useState } from "react";

const Hookobject = () => {
  const [user, setuser] = useState({ fisrtname: "", lastname: "" });
  const changeHandler = (e) => {
    setuser({ ...user, fisrtname: e.target.value });
  };
  const changelastHandler = (e) => {
    setuser({ ...user, lastname: e.target.value });
  };

  return (
    <form>
      <input
        type="text"
        value={user.fisrtname}
        onChange={changeHandler}
      ></input>
      <input
        type="text"
        value={user.lastname}
        onChange={changelastHandler}
      ></input>
      <h1>firstname is:{user.fisrtname}</h1>
      <h1>lasttname is:{user.lastname}</h1>
    </form>
  );
};

export default Hookobject;
