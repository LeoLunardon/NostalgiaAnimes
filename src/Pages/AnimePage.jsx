import React from "react";
import FbAnimeCollection from "../Firebase/FbAnimeCollection";
import AnimeDetail from "../Components/AnimeDetail";
import { useParams } from "react-router-dom";

const AnimePage = () => {
  const { animeId } = useParams();
  const animeDataCollection = FbAnimeCollection();

  const animeData = animeDataCollection.find((anime) => anime.id === animeId);

  return (
    <div>
      <AnimeDetail animeData={animeData} />
    </div>
  );
};

export default AnimePage;
