import type { Movie } from '../../models/movie';

function MovieComponent({ movie: { imdbId, title, year, rank, posterUrl, actors } }: { movie: Movie }) {

  return (
     <tr key={imdbId}>
        <td>{title}</td>
        <td>{year}</td>
        <td>{rank}</td>
        <td>{actors}</td>
        <td>{posterUrl ? <img width={100} src={posterUrl} alt={title} /> : <span>No Image</span>}</td>
    </tr>
  )
}

export default MovieComponent