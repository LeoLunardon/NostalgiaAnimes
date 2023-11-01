import React from "react";

const RankedAnimes = () => {
  return (
    <div className="absolute right-5 top-28">
      <ul class="w-96 font-medium flex flex-col gap-2 text-gray-900  rounded-lg">
        <li class="w-full   rounded-t-lg dark:border-gray-600">
          <a href="/anime/DragonBall%20Z">
            <img
              src="https://i.imgur.com/2eXeESo.png"
              className="rounded-lg"
              alt=""
            />
          </a>
        </li>
        <li class="w-full   rounded-t-lg dark:border-gray-600">
          <a href="/anime/Naruto">
            <img
              src="https://i.imgur.com/0kmCIf4.png"
              className="rounded-lg"
              alt=""
            />
          </a>
        </li>
        <li class="w-full   rounded-t-lg dark:border-gray-600">
          <a href="/anime/Demon%20Slayer">
            <img
              src="https://i.imgur.com/rspFhnH.png"
              className="rounded-lg"
              alt=""
            />
          </a>
        </li>
        <li class="w-full   rounded-t-lg dark:border-gray-600">
          <a href="/anime/Mashle%20-%20Magic%20and%20Muscles">
            <img
              src="https://i.imgur.com/IOeJNmQ.png"
              className="rounded-lg"
              alt=""
            />
          </a>
        </li>
        <li class="w-full   rounded-t-lg dark:border-gray-600">
          <a href="/anime/Avatar%20A%20lenda%20de%20Aang">
            <img
              src="https://i.imgur.com/E7l7Dvh.png"
              className="rounded-lg"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RankedAnimes;
