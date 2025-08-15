import { useState, useEffect } from "react";
import type { Movie } from "../models/movie";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Cargar favoritos desde localStorage al inicio
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Guardar favoritos cada vez que cambien
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    if (!favorites.find((f) => f.imdbId === movie.imdbId)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (imdbId: string) => {
    setFavorites(favorites.filter((f) => f.imdbId !== imdbId));
  };

  const isFavorite = (imdbId: string) => {
    return favorites.some((f) => f.imdbId === imdbId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
