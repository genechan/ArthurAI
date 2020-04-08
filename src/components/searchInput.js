import React from "react";

const Search = ({ value, onChange, label }) => {
  return (
    <div>
      <p>Will find any name or part of a the name in the search</p>
      <label htmlFor={`search-${label}`}>{label}</label>
      &nbsp;
      <input
        id={`search-${label}`}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
