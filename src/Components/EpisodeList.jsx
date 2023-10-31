import React from "react";
import { Link } from "react-router-dom";

const EpisodeList = ({ episodeLinks, animeId }) => {
  return (
    <div>
      <h2>Lista de Episódios</h2>
      <ul>
        {episodeLinks &&
          episodeLinks.map((episode, index) => (
            <li key={index}>
              <Link to={`/anime/${animeId}/${episode.order}`}>
                Episódio {index + 1}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EpisodeList;