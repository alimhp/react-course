import { useState } from "react";
import styles from "./Search.module.css";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const ChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.FormControl}>
      <div> search:</div>
      <input
        type="text"
        placeholder="search for"
        onChange={ChangeHandler}
        value={value}
      ></input>
    </div>
  );
};

export default SearchBar;
