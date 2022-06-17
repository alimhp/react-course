import { useState } from "react";
import { useProductAction } from "../Providers/ProductsProvider";

const Filter = () => {
  const dispatch = useProductAction();
  const [value, setValue] = useState("");

  
  const changeHandler = (e) => {
    dispatch({ type: "Filter", event: e });
    setValue(e.target.value);
  };
  return (
    <div>
      filter product
      <div>
        <p>order by:</p>

        <select onChange={changeHandler} value={value}>
          <option value="">all</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="L">L</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
