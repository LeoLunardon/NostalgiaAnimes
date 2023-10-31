import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  where,
  query,
  collectionGroup,
} from "firebase/firestore";
import FirebaseConfig from "./FbConfig";

const firebaseApp = FirebaseConfig;
const db = getFirestore(firebaseApp);

export default function FbEpisodesCollection(animeId) {
  const [episodeLinks, setEpisodeLinks] = useState([]);

  useEffect(() => {
    const fetchEpisodeLinks = async () => {
      try {
        const episodesCollectionRef = collectionGroup(db, "Links");
        const episodeSnapshot = await getDocs(episodesCollectionRef);

        const episodes = [];

        episodeSnapshot.forEach((doc) => {
          console.log("Documento:", doc.id);
          console.log("Parent Parent ID:", doc.ref.parent.parent.id);

          if (doc.ref.parent.parent.id === animeId) {
            const episodeData = doc.data();
            if (episodeData.url) {
              episodes.push({ episode: episodeData.url, order: episodeData.order });
            }
          }
        });

        // Ordenar os episódios com base no campo "order"
        episodes.sort((a, b) => a.order - b.order);

        setEpisodeLinks(episodes);
        console.log("Episódios:");
        episodes.forEach((episode, index) => {
          console.log(index, ":", episode.episode);
        });
      } catch (error) {
        console.error("Erro ao buscar episódios:", error);
      }
    };

    fetchEpisodeLinks();
  }, [animeId]);

  return episodeLinks;
}