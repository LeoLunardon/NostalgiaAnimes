import FbConfig from "../Firebase/FbConfig";
import NavBar from "../Components/NavBar/NavBar";
import AnimeList from "../Components/Home/AnimeList";
import RankedAnimes from "../Components/Home/RankedAnimes";


export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="absolute">
        <AnimeList />
        <div>
          <RankedAnimes />
        </div>
      </div>
    </div>
  );
}
