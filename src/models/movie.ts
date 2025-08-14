
export interface Movie {
  imdbId: string;
  title: string;
  year: number;
  aka: string;
  actors: string;
  rank: number;
  posterUrl: string;
  imdbUrl: string;
  imdbIv: string;
  photo: {
    width: number;
    height: number;
  };
}

export interface MovieApiResponse {
  ok: boolean;
  description: Movie[];
  error_code: number;
}

export function adaptApiMovie(apiMovie: any): Movie {
return {
    imdbId: apiMovie["#IMDB_ID"],
    title: apiMovie["#TITLE"],
    year: apiMovie["#YEAR"],
    aka: apiMovie["#AKA"],
    actors: apiMovie["#ACTORS"],
    rank: apiMovie["#RANK"],
    posterUrl: apiMovie["#IMG_POSTER"],
    imdbUrl: apiMovie["#IMDB_URL"],
    imdbIv: apiMovie["#IMDB_IV"],
    photo: {
      width: apiMovie.photo_width,
      height: apiMovie.photo_height,
    }
  }
}