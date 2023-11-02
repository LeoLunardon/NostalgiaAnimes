import React from "react";

const RankedAnimes = () => {
  return (
    <div className="absolute  right-5 top-36">
      <ul class="w-96 font-medium hidden lg:flex flex-col gap-2 text-gray-900  rounded-lg">
        <div className="flex-row">
          <li className="text-white mb-4  text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 inline-block"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
            {" "} Top Animes{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 inline-block"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
          </li>
        </div>
        <li class="w-full   rounded-t-lg dark:border-gray-600">
          <a href="/anime/DragonBall%20Z">
            <img
              src="https://i.imgur.com/2eXeESo.png"
              className="sm:rounded-lg"
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
