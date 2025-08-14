import axios from 'axios';
import type { MovieApiResponse } from '../models/movie';

export async function getSearchResult(title: string): Promise<MovieApiResponse> {
  try {
    const response = await axios.get<MovieApiResponse>(`https://imdb.iamidiotareyoutoo.com/search`, {
     params: {
          q: title,
        },
    });
    console.log("Fetched movies:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error on get Movies:', error);
    throw error;
  }
}