import React from 'react';

function Filter({ filter, onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts..."
    />
  );
}

export default Filter;
