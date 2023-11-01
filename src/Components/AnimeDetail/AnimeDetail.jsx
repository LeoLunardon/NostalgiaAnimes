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
      <div className="flex gap-5 p-4  bg-gray-900 w-1/2 border-2   border-gray-100">
        <img src={animeData?.urlCapa} className="w-40 border-4 border-orange-500 h-60" alt="" />
        <div className="text-white flex flex-col gap-2">
          <h2 className="text-2xl">Detalhes do Anime</h2>
          <p className="text-2xl">Nome: {animeData?.Nome}</p>
          <p>Descrição: {animeData?.Descrição}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
