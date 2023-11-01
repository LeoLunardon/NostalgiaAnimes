import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import RankedAnimes from "../Components/Home/RankedAnimes";
import FbEpisodesCollection from "../Firebase/FbEpisodesCollection";

const VideoPage = () => {
  const { animeId, episodeNumber } = useParams();
  const [episodeUrl, setEpisodeUrl] = useState(null);

  useEffect(() => {
    const fetchEpisodeUrl = async () => {
      const episodesData = await FbEpisodesCollection(animeId);
      const episode = episodesData.find(
        (e) => e.episodeNumber === parseInt(episodeNumber)
      );

      if (episode) {
        setEpisodeUrl(episode.url);
      } else {
        console.error("URL do episódio não encontrado");
      }
    };

    fetchEpisodeUrl();
  }, [animeId, episodeNumber]);

  return (
    <div>
      <div>
        <NavBar />
        <RankedAnimes />
      </div>
      <h2>Assistir Episódio {episodeNumber}</h2>
      {episodeUrl && (
        <iframe
          src={episodeUrl}
          title={`Episódio ${episodeNumber}`}
          width="800"
          height="600"
        />
      )}
    </div>
  );
};

export default VideoPage;
