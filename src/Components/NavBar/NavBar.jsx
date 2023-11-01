import React from "react";

const NavBar = () => {
  return (
    <div className="w-full  z-40 flex top-0 h-28">
      <a href="/">
        <img
          src="https://i.imgur.com/hCoK4mY.png"
          className="w-2/12 absolute -top-12 left-0"
          alt=""
        />
      </a>
      <form className="relative left-72 top-8">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-white sr-only "
        >
          Search
        </label>
        <input
          type="search"
          id="default-search"
          className="block w-96 p-4 pl-10 text-sm text-white rounded-full bg-gray-800 placeholder-gray-400"
          placeholder="Pesquise um anime..."
          required
        />
        <div className="absolute top-5 right-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-white z-50 dark:text-gray-400"
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
        </div>
      </form>
    </div>
  );
};

export default NavBar;
