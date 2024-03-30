import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ addFilter, value }) => {
  function handleChange(e) {
    e.preventDefault();
    addFilter(e.target.value);
  }

  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        className={css.filterInput}
        type="text"
        id={inputId}
        name="filter"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
