import { useState } from "react";
import { useProductAction } from "../Providers/ProductsProvider";
import Select from "react-select";
import styles from "./Filter.module.css";

const options = [
  { value: "", label: "ALL" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
  { value: "L", label: "L" },
];
const SortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductAction();
  const [value, setValue] = useState("");
  const [Sort, setSort] = useState("");

  const changeHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "Filter", selectedOption });
    dispatch({ type: "Sort", selectedOption: Sort });

    setValue(selectedOption);
  };
  const SortHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "Sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <div className={styles.filter}>
      filter product
      <div>
        <p>order by:</p>
        <Select value={value} onChange={changeHandler} options={options} />
      </div>
      <div>
        <p>Sort by:</p>
        <Select value={Sort} onChange={SortHandler} options={SortOptions} />
      </div>
    </div>
  );
};

export default Filter;
