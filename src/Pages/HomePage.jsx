
import NavBar from "../Components/NavBar/NavBar";
import AnimeList from "../Components/Home/AnimeList";
import RankedAnimes from "../Components/Home/RankedAnimes";


export default function HomePage() {
  return (
    <div>
      <NavBar />
          <RankedAnimes />
      <div className="absolute">
        <AnimeList />
        <div>
        </div>
      </div>
    </div>
  );
}
