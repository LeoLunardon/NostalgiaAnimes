import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FbConfig from "../Firebase/FbConfig";
import NavBar from "../Components/NavBar";
import FbAnimeCollection from "../Firebase/FbAnimeCollection";
const firebaseApp = FbConfig;

export default function HomePage() {
  const animeData = FbAnimeCollection();

  return (
    <div>
      <NavBar />
      <div className="flex  flex-col items-center mt-10">
        <ul className="flex w-11/12 flex-wrap gap-10">
          {animeData.map((anime) => (
            <li className="text-center" key={anime.id}>
              <Link   to={`/anime/${anime.id}`}>
                <img src={anime.urlCapa} className="w-40 hover:scale-105 mb-2 transition  h-60" alt="" />
               <span className="text-lg inline-block w-40"> {anime.Nome} </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
