const SearchBox = ({ addFilter, value }) => {
  function handleChange(e) {
    e.preventDefault();
    addFilter(e.target.value);
  }

  return (
    <input type="text" name="filter" value={value} onChange={handleChange} />
  );
};

export default SearchBox;
