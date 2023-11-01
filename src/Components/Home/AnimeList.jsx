import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FbAnimeCollection from "../../Firebase/FbAnimeCollection";

const AnimeList = () => {
  const animeData = FbAnimeCollection();
  const [sortedData, setSortedData] = useState(animeData);
  const [sortBy, setSortBy] = useState("");

  const sortAlphabetically = () => {
    const sortData = [...animeData].sort((a, b) =>
      a.Nome.localeCompare(b.Nome)
    );
    setSortedData(sortData);
    setSortBy("A-Z");
  };

  const reverseAlphabetically = () => {
    const sortData = [...animeData].sort((a, b) =>
      b.Nome.localeCompare(a.Nome)
    );
    setSortedData(sortData);
    setSortBy("Z-A");
  };

  useEffect(() => {
    setSortedData(animeData);
  }, [animeData]);

  return (
    <div>
      <div className="flex flex-col items-start pl-10 mt-10">
        <div className="mb-10">
          <label className="text-lg p-1 text-white " htmlFor="sortSelect">Ordenar por : </label>
          <select
          className="p-1 bg-gray-800 text-white"
            id="sortSelect"
            onChange={(e) => {
              if (e.target.value === "A-Z") {
                sortAlphabetically();
              } else if (e.target.value === "reverse") {
                reverseAlphabetically();
              }
            }}
          >
            <option value="">Selecione...</option>
            <option value="A-Z">Nome (A-Z)</option>
            <option value="reverse">Inverter Ordem</option>
          </select>
        </div>
        <ul className="flex w-2/3 flex-wrap gap-4">
          {sortedData.map((anime) => (
            <li className="text-center" key={anime.id}>
              <Link to={`/anime/${anime.id}`}>
                <img
                  src={anime.urlCapa}
                  className="w-44 hover:scale-105 mb-2 rounded-2xl transition h-64"
                  alt=""
                />
                <span className="text-lg inline-block w-48">{anime.Nome}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimeList;