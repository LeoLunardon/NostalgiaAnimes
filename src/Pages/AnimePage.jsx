import React from "react";
import FbAnimeCollection from "../Firebase/FbAnimeCollection";
import FbEpisodesCollection from "../Firebase/FbEpisodesCollection";
import AnimeDetail from "../Components/AnimeDetail/AnimeDetail";
import EpisodeList from "../Components/AnimeDetail/EpisodeList";
import { useParams } from "react-router-dom";

const AnimePage = () => {
  const { animeId } = useParams();
  const animeDataCollection = FbAnimeCollection();
  const animeEpisodesCollection = FbEpisodesCollection(animeId);

  const animeData = animeDataCollection.find((anime) => anime.id === animeId);

  return (
    <div>
      <div>
        <AnimeDetail animeData={animeData} />
      </div>
      <div className="ml-5">
        <EpisodeList
          episodeLinks={animeEpisodesCollection}
          animeId={animeId}
          animeData={animeData}
        />
      </div>
    </div>
  );
};

export default AnimePage;
