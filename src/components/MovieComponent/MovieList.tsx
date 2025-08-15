import { useMovie } from "../../contexts/movieContext";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import MovieComponent from "./Movie";

function MovieList() {

  const { titles, loading} = useMovie();

    if (loading) {
    console.log("Loading movies...");
    return <LoadingComponent />;
  }

  if (!titles || titles.length === 0) {
    return (
      <>
        <h1>Movie List</h1>
        <p>Find some movie</p>
      </>
    );
  }

  return (
    <>
      <h1>Movie List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Rank</th>
            <th>Actors</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {titles.map(t => <MovieComponent key={t.imdbId} movie={t} />)}
        </tbody>
      </table>
    </>
  )
}

export default MovieList
