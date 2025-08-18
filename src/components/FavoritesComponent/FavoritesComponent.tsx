import { useState } from "react";
import { useFavorites } from "../../contexts/favoritesContext";

function FavoritesComponent() {

  const { favorites, removeFavorite } = useFavorites(); 

    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
    };

  return (
    <div className="flex flex-col bg-white w-full mx-auto shadow rounded-lg">
      {favorites && favorites.length > 0 ? (
        favorites.map((item) => (
          <div
            key={item.imdbId}
            className="w-full border-b last:border-none"
          >

           <div className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors">

           <span className="font-semibold text-gray-800">{item.title}</span>

          <div className="flex gap-2">
            <button
              onClick={() => removeFavorite(item.imdbId)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              Remove
            </button>
            <button
              onClick={() => toggle(item.imdbId)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              {openId === item.imdbId ? "Close" : "Open"}
            </button>
          </div>
        </div>

        {openId === item.imdbId && (
          <div className="p-4 bg-white text-gray-600 flex flex-row justify-between">
            <span className="block">
              <label className="font-medium text-gray-700">Year:</label> {item.year}
            </span>
            <span className="block">
              <label className="font-medium text-gray-700">Rank:</label> {item.rank}
            </span>
            <span className="block">
              <label className="font-medium text-gray-700">Actors:</label> {item.actors}
            </span>
            <span className="block">
              <img src={item.posterUrl} alt={item.title} className="w-32 h-48 object-cover" width={100}/>
            </span>
          </div>
        )}
      </div>
    ))
  ) : (
    <p className="text-gray-500 p-6">No favorites added yet.</p>
  )}
</div>

  );
}

export default FavoritesComponent;