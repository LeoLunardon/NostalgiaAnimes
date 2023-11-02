import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; // Importe o Link
import NavBar from "../Components/NavBar/NavBar";
import RankedAnimes from "../Components/Home/RankedAnimes";
import FbEpisodesCollection from "../Firebase/FbEpisodesCollection";

const VideoPage = () => {
  const { animeId, episodeNumber } = useParams();
  const [episodeUrl, setEpisodeUrl] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

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

    // Detecta se a tela é grande (maior que 640px)
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verifique o tamanho da tela inicialmente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [animeId, episodeNumber]);

  return (
    <div>
      <div>
        <NavBar />
        <RankedAnimes />
      </div>
      <h2 className="text-2xl inline-block ml-10 text-white">
        Assistir Episódio {episodeNumber}
      </h2>
      {episodeUrl && (
        <div
          className={`ml-10 flex-col flex ${
            isLargeScreen ? "custom-width" : "w-80"
          }`}
        >
          <iframe
            className="inline-block"
            allow="fullscreen"
            src={episodeUrl}
            title={`Episódio ${episodeNumber}`}
            width="800"
            height="450"
          />
          <div className="flex  border w-2/4">
            <Link to={`/video/${animeId}/${parseInt(episodeNumber) - 1}`}>
              <button>Anterior</button>
            </Link>

            <Link to={`/video/${animeId}/${parseInt(episodeNumber) + 1}`}>
              <button>Próximo</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
