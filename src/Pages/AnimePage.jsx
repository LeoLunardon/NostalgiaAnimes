import React from "react";
import FbAnimeCollection from "../Firebase/FbAnimeCollection";
import FbEpisodesCollection from "../Firebase/FbEpisodesCollection";
import AnimeDetail from "../Components/AnimeDetail";
import EpisodeList from "../Components/EpisodeList"; // Importe o componente EpisodeList
import { useParams } from "react-router-dom";

const AnimePage = () => {
  const { animeId } = useParams();
  console.log("AnimeId:", animeId); // Verifique se o animeId está sendo impresso corretamente
  const animeDataCollection = FbAnimeCollection();
  const animeEpisodesCollection = FbEpisodesCollection(animeId); 

  const animeData = animeDataCollection.find((anime) => anime.id === animeId);

  return (
    <div>
      <AnimeDetail animeData={animeData} />
      <EpisodeList episodeLinks={animeEpisodesCollection} />
    </div>
  );
};

export default AnimePage;
