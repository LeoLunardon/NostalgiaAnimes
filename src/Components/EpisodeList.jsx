import React from "react";

const EpisodeList = ({ episodeLinks }) => {
  const handleEpisodeClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <h2>Lista de Episódios</h2>
      <ul>
        {episodeLinks &&
          episodeLinks.map((episode, index) => (
            <li key={index}>
              <a
                href={episode.episode} // Corrigido aqui
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleEpisodeClick(episode.episode)}
              >
                Episódio {index + 1}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EpisodeList;