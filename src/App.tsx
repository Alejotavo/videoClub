import './App.css'
import MovieList from './components/MovieComponent/MovieList';
import SearchComponent from './components/SearchComponent/SearchComponent';
import { MovieProvider } from './contexts/movieContext';

function App() {

  return (
    <>
     <MovieProvider>
        <SearchComponent />
        <MovieList />
      </MovieProvider> 
    </>
  )
}

export default App
