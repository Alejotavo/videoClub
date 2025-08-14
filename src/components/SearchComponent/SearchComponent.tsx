import { useMovie } from "../../contexts/movieContext";

function SearchComponent() {

const { value, setValue, handleSearch, clearSearch } = useMovie();

  return (
     <>
      <h1>Search Movies</h1>
      <input type="text" placeholder="Search by title..." value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={clearSearch}>Clear</button>
     </>
  )
}

export default SearchComponent