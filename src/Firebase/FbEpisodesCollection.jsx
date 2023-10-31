import React, { useEffect, useState } from "react";
import { getFirestore, getDocs, collectionGroup } from "firebase/firestore";
import FirebaseConfig from "./FbConfig";

const firebaseApp = FirebaseConfig;
const db = getFirestore(firebaseApp);

export default function FbEpisodesCollection(animeId, order) {
  const [episodeLinks, setEpisodeLinks] = useState([]);

  useEffect(() => {
    const fetchEpisodeLinks = async () => {
      try {
        const episodesCollectionRef = collectionGroup(db, "Links");
        const episodeSnapshot = await getDocs(episodesCollectionRef);

        const episodes = [];

        episodeSnapshot.forEach((doc) => {
          if (doc.ref.parent.parent.id === animeId) {
            const episodeData = doc.data();
            if (episodeData.url) {
              episodes.push({
                episode: episodeData.url,
                order: episodeData.order,
              });
            }
          }
        });

        // Ordernar a lista de episódios com base no campo order
        episodes.sort((a, b) => a.order - b.order);

        setEpisodeLinks(episodes);
      } catch (error) {
        console.error("Erro ao buscar episódios na base de dados:", error);
      }
    };

    fetchEpisodeLinks();
  }, [animeId, order]);

  return episodeLinks;
}
