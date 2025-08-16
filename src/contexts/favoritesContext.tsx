import { createContext, useContext, useState, type ReactNode } from "react";
import type { Movie } from "../models/movie";

interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {

  const [favorites, setFavorites] = useState<Movie[]>(() => {
    // inicializa desde localStorage al montar
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbId !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some((movie) => movie.imdbId === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de un FavoritesProvider");
  }
  return context;
}; 
  