import React, { useState } from "react";

const FilterInput = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onFilter(filter);
    }
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="Filtrar por nome do anime"
        value={filter}
        onChange={handleFilterChange}
        onKeyPress={handleKeyPress}
        className="w-96 p-2  rounded-xl bg-gray-800 text-gray-300  "
      ></input>
      <button className="ml-2 " onClick={() => onFilter(filter)}>
        <svg
          className="w-5 h-4 text-white z-50 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default FilterInput;
