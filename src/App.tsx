import { Route, Routes } from 'react-router-dom';
import './App.css'
import MovieList from './components/MovieComponent/MovieList';
import SearchComponent from './components/SearchComponent/SearchComponent';
import { MovieProvider } from './contexts/movieContext';
import FavoritesComponent from './components/FavoritesComponent/FavoritesComponent';
import { FavoritesProvider } from './contexts/favoritesContext';

function App() {

  return (

      <MovieProvider>
        <FavoritesProvider> 
        <SearchComponent />
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/favorites" element={<FavoritesComponent />} />
          </Routes>
        </FavoritesProvider>
    </MovieProvider>

  )
}

export default App
