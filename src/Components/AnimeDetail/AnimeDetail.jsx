import React from "react";
import NavBar from "../NavBar/NavBar";
import RankedAnimes from "../Home/RankedAnimes";

const AnimeDetail = ({ animeData }) => {
  return (
    <div className="relative">
      <NavBar />
      <div>
        <RankedAnimes />
      </div>
      <div className="lg:flex-row flex flex-col items-center gap-5 p-8 ml-5 border 2xl:text-lg 2xl:ml-5 bg-slate-950  w-2/3  rounded-3xl  ">
        <img src={animeData?.urlCapa} className="w-40 border-4  h-60" alt="" />
        <div className="text-white flex flex-col gap-2">
          <p className="text-2xl">
            <span className="font-semibold"></span>
            {animeData?.Nome}
          </p>
          <div className="max-h-60 overflow-y-auto">
            <p>
              <span className="font-semibold text-xl">Descrição: </span>
              {animeData?.Descrição}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
