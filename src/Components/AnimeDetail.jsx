import React from "react";

const AnimeDetail = ({ animeData }) => {
  return (
    <div>
      <h2>Detalhes dos Animes</h2>
      <p>Nome: {animeData?.Nome}</p>
      <p>Descrição: {animeData?.Descrição}</p>
    </div>
  );
};

export default AnimeDetail;
