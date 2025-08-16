import { Link } from "react-router-dom";
import { useMovie } from "../../contexts/movieContext";

function SearchComponent() {

const { value, setValue, handleSearch, clearSearch } = useMovie();

  return (
    <div className="bg-gray-800 text-white p-4 w-full flex flex-row flex-nowrap justify-between">
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <div className="flex items-center gap-3">
        <input className="border border-gray-300 p-2 rounded" name="title" type="text" placeholder="Search by title..." value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white px-4 py-2 rounded">Search</button>
        <button onClick={clearSearch} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition-all duration-300 ease-in-out">Clear</button>
      </div>
    </div>
  );
}

export default SearchComponent