import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../Components/VideoPlayer";
import FbEpisodeVideo from "../Firebase/FbEpisodeVideo";

const VideoPage = () => {
  const { animeId, order } = useParams();
  const videoUrl = FbEpisodeVideo(animeId, order);
  return (
    <div>
      <h1>Página de Vídeo</h1>
      {videoUrl ? (
        <VideoPlayer videoUrl={videoUrl} />
      ) : (
        <p>Carregando o vídeo...</p>
      )}
    </div>
  );
};

export default VideoPage;