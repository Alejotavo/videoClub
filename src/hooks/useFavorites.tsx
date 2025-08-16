import { useState, useEffect } from "react";
import type { Movie } from "../models/movie";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    // inicializa desde localStorage al montar
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // sincroniza cada vez que cambie el estado
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      if (prev.find((f) => f.imdbId === movie.imdbId)) return prev;
      return [...prev, movie];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((f) => f.imdbId !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some((f) => f.imdbId === id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
