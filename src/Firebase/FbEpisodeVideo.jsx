import React, { useEffect, useState } from "react";
import {
  getFirestore,
  getDocs,
  collectionGroup,
  query,
  where,
} from "firebase/firestore";
import FirebaseConfig from "./FbConfig";

const firebaseApp = FirebaseConfig;
const db = getFirestore(firebaseApp);

export default function FbEpisodeVideo(animeId, order) {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        // Crie uma consulta (query) para buscar o episódio com base no animeId e no order
        const episodesQuery = query(
          collectionGroup(db, "Links"),
          where("order", "==", order)
        );

        const episodeSnapshot = await getDocs(episodesQuery);

        if (!episodeSnapshot.empty) {
          // Obtenha o primeiro episódio da lista (deve haver apenas um episódio com o mesmo order)
          const episodeData = episodeSnapshot.docs[0].data();

          if (episodeData.url) {
            setVideoUrl(episodeData.url);
          } else {
            console.error("URL do episódio não encontrada.");
          }
        } else {
          console.error("Episódio não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar a URL do episódio:", error);
      }
    };

    fetchVideoUrl();
  }, [animeId, order]);

  return videoUrl;
}
