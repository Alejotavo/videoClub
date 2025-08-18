import { useMovie } from "../../contexts/movieContext";
import { useFavorites } from "../../contexts/favoritesContext";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import MovieComponent from "./Movie";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { useState } from "react";

function MovieList() {
  const { titles, loading, error} = useMovie();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites(); 
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  if (loading) {
      return <LoadingComponent />;
    }

  if (error) {
    return <ErrorComponent />;
  }

  if (!titles || titles.length === 0) {
    return (
      <div className="d-flex text-center">
        <p>Find some movie</p>
      </div>
    );
  } 

  // Sort titles based on the year in the specified order
  const sortedTitles = [...titles].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.year - b.year;
    } else {
      return b.year - a.year;
    }
  });

  return (
    <>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">
              Year
              <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                {sortOrder === "asc" ? "🔼" : "🔽"}
              </button>
            </th>
            <th className="py-2 px-4 border-b">Rank</th>
            <th className="py-2 px-4 border-b">Actors</th>
            <th className="py-2 px-4 border-b">Poster</th>
            <th className="py-2 px-4 border-b">Select</th>
          </tr>
        </thead>
        <tbody>
          {sortedTitles.map(t => <MovieComponent  key={t.imdbId} movie={t}  addFavorite={addFavorite} removeFavorite={removeFavorite} isFavorite={isFavorite} />)}
        </tbody>
      </table>
    </>
  )
}

export default MovieList
