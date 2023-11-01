import React from "react";

const NavBar = () => {
  return (
    <div className="w-full flex  ">
      <img
        src="https://i.imgur.com/QEAyO1C.jpg"
        className="w-full relative h-80 opacity-20"
        alt=""
      />
      <img
        src="https://i.imgur.com/hCoK4mY.png"
        className="w-2/12 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt=""
      />
    </div>
  );
};

export default NavBar;
