import { getFirestore, doc, getDoc } from "firebase/firestore";
import FirebaseConfig from "./FbConfig";

const firebaseApp = FirebaseConfig;
const db = getFirestore(firebaseApp);

const FbEpisodesCollection = async (animeId) => {
  try {
    const animeDocRef = doc(db, "Animes", animeId);
    const animeDocSnapshot = await getDoc(animeDocRef);

    if (animeDocSnapshot.exists()) {
      const animeData = animeDocSnapshot.data();

      if (typeof animeData.Episodios === "object") {
        const episodes = Object.entries(animeData.Episodios)
          .filter(([key, episode]) => episode !== "null")
          .map(([key, episode], index) => ({
            url: episode,
            episodeNumber: parseInt(key),
          }));
        return episodes;
      } else {
        console.error("A propriedade 'Episodios' não é um objeto");
        return [];
      }
    } else {
      console.error("Documento de anime não encontrado");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar episódios na base de dados:", error);
    return [];
  }
};
export default FbEpisodesCollection;
