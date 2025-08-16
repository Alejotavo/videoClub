import { useFavorites } from "../../contexts/favoritesContext";


function FavoritesComponent() {
    const { favorites, removeFavorite } = useFavorites(); 
  console.log("Se renderiza el componente de favoritos");

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {favorites ? (
        favorites.map((item) => (
          <div key={item.imdbId} className="flex items-center justify-between w-full p-4 border-b">
            <span>{item.title}</span>
            <button onClick={() => removeFavorite(item.imdbId)} className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors">Remove</button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No favorites added yet.</p>
      )}
    </div>
  );
}

export default FavoritesComponent;