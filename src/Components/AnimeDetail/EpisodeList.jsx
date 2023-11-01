import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FbEpisodesCollection from "../../Firebase/FbEpisodesCollection";

const EpisodeList = ({ animeId, animeData }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const episodesData = await FbEpisodesCollection(animeId);
      setEpisodes(episodesData);
    };

    fetchEpisodes();
  }, [animeId]);

  return (
    <div className="text-white">
      <h2 className="text-2xl">Lista de Episódios de {animeData?.Nome}</h2>
      <div className="w-1/2 h-96 overflow-y-auto">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="p-2">Episódio</th>
              <th className="p-2">Assistir</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <tr
                key={episode.episodeNumber}
                className={
                  episode.episodeNumber % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                }
              >
                <td className="p-2">Episódio {episode.episodeNumber}</td>
                <td className="p-2">
                  <Link to={`/video/${animeId}/${episode.episodeNumber}`}>
                    Assistir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EpisodeList;