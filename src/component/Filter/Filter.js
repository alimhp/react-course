const Filter = () => {
  const ChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      filter product
      <div>
        <p>order by:</p>
        <select onChange={ChangeHandler}>
          <option value="">all</option>
          <option value="S">S</option>
          <option value="XS">XS</option>
          <option value="M">M</option>
          <option value="XL">XL</option>
          <option value="XLL">XLL</option>
          <option value="L">L</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
