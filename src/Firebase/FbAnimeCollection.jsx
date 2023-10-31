import React, { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import FirebaseConfig from "./FbConfig";

const firebaseApp = FirebaseConfig;

const db = getFirestore(firebaseApp);
const animesCollectionRef = collection(db, "/Animes");

export default function FbAnimeCollection() {
  const [animeData, setAnimeData] = useState([]);

  const fetchAnimeData = async () => {
    const animeSnapshot = await getDocs(animesCollectionRef);
    const animeData = [];

    animeSnapshot.forEach((doc) => {
      const anime = doc.data();
      const animeWithUrl = {
        id: doc.id,
        ...anime,
        urlCapa: anime.urlCapa, // Adicione essa linha para capturar a URL da capa do anime
      };
      animeData.push(animeWithUrl);
      console.log(animeWithUrl);
    });

    setAnimeData(animeData);
  };

  useEffect(() => {
    fetchAnimeData();

  }, []);

  return animeData;
}
