import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FbConfig from "../Firebase/FbConfig";
import FbAnimeCollection from "../Firebase/FbAnimeCollection";
const firebaseApp = FbConfig;

export default function HomePage() {
  const animeData = FbAnimeCollection();

  return (
    <div>
      <h1>Página Inicial</h1>
      <ul>
        {animeData.map((anime) => (
          <li key={anime.id}>
            <Link to={`/anime/${anime.id}`}>{anime.Nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
