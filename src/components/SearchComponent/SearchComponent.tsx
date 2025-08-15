import { useMovie } from "../../contexts/movieContext";

function SearchComponent() {

const { value, setValue, handleSearch, clearSearch } = useMovie();

  return (
     <>
      <h1 className="text-2xl font-bold mb-4">Search Movies</h1>
      <input className="border border-gray-300 p-2 rounded" type="text" placeholder="Search by title..." value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white px-4 py-2 rounded">Search</button>
      <button onClick={clearSearch} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition-all duration-300 ease-in-out">Clear</button>
     </>
  )
}

export default SearchComponent