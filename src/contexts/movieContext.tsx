import { createContext, useContext, useState, type ReactNode } from "react";
import type { Movie } from "../models/movie";
import { getSearchResult } from "../service/searchMovie";
import { adaptApiMovie } from "../models/movie";

interface MovieContextType {
  titles: Movie[] | null;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => Promise<void>;
  clearSearch: () => void;
}

interface MovieProviderProps {
  children: ReactNode;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: MovieProviderProps) => {
  
  const [titles, setTitles] = useState<Movie[] | null>(null);
  const [value, setValue] = useState<string>("");

  const handleSearch = async () => {
    if (!value.trim()) {
      return;
  }
    try {
      const fetchedTitle = await getSearchResult(value);
      setTitles(fetchedTitle.description.map(adaptApiMovie));
      console.log("title", fetchedTitle.description.map(adaptApiMovie));
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  const clearSearch = () => {
    setValue("");
    setTitles(null);
  };

  return (
    <MovieContext.Provider value={{ titles, value, setValue, handleSearch, clearSearch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovie debe usarse dentro de un MovieProvider");
  }
  return context;
};
