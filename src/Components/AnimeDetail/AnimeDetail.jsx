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
      <div className="flex gap-5 p-4 2xl:ml-5 bg-slate-900 w-2/3 border rounded-3xl  ">
        <img src={animeData?.urlCapa} className="w-40 border-4  h-60" alt="" />
        <div className="text-white flex flex-col gap-2">
          <h2 className="text-xl">Detalhes do Anime</h2>
          <p className="text-2xl"><span className="font-semibold">Nome: </span>{animeData?.Nome}</p>
          <p><span className="font-semibold">Descrição:  </span>{animeData?.Descrição}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
