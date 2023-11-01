import React from "react";
import FbAnimeCollection from "../Firebase/FbAnimeCollection";
import FbEpisodesCollection from "../Firebase/FbEpisodesCollection";
import AnimeDetail from "../Components/AnimeDetail";
import EpisodeList from "../Components/EpisodeList";
import { useParams } from "react-router-dom";

const AnimePage = () => {
  const { animeId } = useParams();
  const animeDataCollection = FbAnimeCollection();
  const animeEpisodesCollection = FbEpisodesCollection(animeId);

  const animeData = animeDataCollection.find((anime) => anime.id === animeId);

  return (
    <div>
      <AnimeDetail animeData={animeData} />
      <EpisodeList
        episodeLinks={animeEpisodesCollection}
        animeId={animeId}
        animeData={animeData}
      />
    </div>
  );
};

export default AnimePage;
