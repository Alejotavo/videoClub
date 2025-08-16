import { Route, Routes } from 'react-router-dom';
import './App.css'
import MovieList from './components/MovieComponent/MovieList';
import SearchComponent from './components/SearchComponent/SearchComponent';
import { MovieProvider } from './contexts/movieContext';
import FavoritesComponent from './components/FavoritesComponent/FavoritesComponent';

function App() {

  return (
    <MovieProvider>
      <SearchComponent />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<FavoritesComponent />} />
      </Routes>
    </MovieProvider>
  )
}

export default App
