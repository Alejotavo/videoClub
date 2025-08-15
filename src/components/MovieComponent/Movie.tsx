import type { Movie } from '../../models/movie';

type MovieComponentProps = {
  movie: Movie;
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

function MovieComponent({ movie, addFavorite, removeFavorite, isFavorite }: MovieComponentProps) {

  const { imdbId, title, year, rank, posterUrl, actors } = movie;
    
  return (
     <tr key={imdbId} className='hover:bg-gray-100'>
        <td>{title}</td>
        <td>{year}</td>
        <td>{rank}</td>
        <td>{actors}</td>
        <td>{posterUrl ? <img width={100} src={posterUrl} alt={title} /> : <span>No Image</span>}</td>
        <td>
        <input
          type="checkbox"
          checked={isFavorite(imdbId)}
          onChange={(e) => {
            if (e.target.checked) {
              addFavorite(movie);
            } else {
              removeFavorite(imdbId);
            }
          }}
        />
        </td>
    </tr>
  )
}

export default MovieComponent