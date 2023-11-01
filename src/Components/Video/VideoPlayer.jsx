import React from "react";
import { useParams } from "react-router-dom";
import FbEpisodeVideo from "../Firebase/FbEpisodeVideo";
const VideoPlayer = () => {
  const { animeId, Index } = useParams();
  const videoUrl = FbEpisodeVideo(animeId);

  return (
    <div>
      <h1>Video Page</h1>
      <p>Anime ID: {animeId}</p>
      <iframe src={videoUrl} frameBorder="0"></iframe>
    </div>
  );
};

export default VideoPlayer;
