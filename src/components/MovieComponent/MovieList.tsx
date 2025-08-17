import { useMovie } from "../../contexts/movieContext";
import { useFavorites } from "../../contexts/favoritesContext";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import MovieComponent from "./Movie";

function MovieList() {
  const { titles, loading} = useMovie();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites(); 

    if (loading) {
    return <LoadingComponent />;
  }

  if (!titles || titles.length === 0) {
    return (
      <div className="d-flex text-center">
        <p>Find some movie</p>
      </div>
    );
  } 

  return (
    <>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Year</th>
            <th className="py-2 px-4 border-b">Rank</th>
            <th className="py-2 px-4 border-b">Actors</th>
            <th className="py-2 px-4 border-b">Poster</th>
            <th className="py-2 px-4 border-b">Select</th>
          </tr>
        </thead>
        <tbody>
          {titles.map(t => <MovieComponent  key={t.imdbId} movie={t}  addFavorite={addFavorite} removeFavorite={removeFavorite} isFavorite={isFavorite} />)}
        </tbody>
      </table>
    </>
  )
}

export default MovieList
