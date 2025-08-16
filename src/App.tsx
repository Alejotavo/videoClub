import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import MovieList from './components/MovieComponent/MovieList';
import SearchComponent from './components/SearchComponent/SearchComponent';
import { MovieProvider } from './contexts/movieContext';
import FavoritesComponent from './components/FavoritesComponent/FavoritesComponent';

function App() {

  return (
    <MovieProvider>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>

      <Routes>
        <Route path="/" element={
            <>
              <SearchComponent />
              <MovieList />
            </>
          } 
        />
        <Route path="/favorites" element={<FavoritesComponent />} />
      </Routes>
    </MovieProvider>
  )
}

export default App
