import { options, baseUrl } from "./options";
import { MovieList } from "./types";

export const getGenreList = async (): Promise<{
  genres: { id: number; name: string }[];
}> => {
  const response = await fetch(
    `${baseUrl}/genre/movie/list?language=en`,
    options,
  );
  return response.json();
};

export const getMoviesByGenre = async (
  genreId: number,
  page = 1,
): Promise<MovieList> => {
  const response = await fetch(
    `${baseUrl}/discover/movie?language=en&with_genres=${genreId}&page=${page}`,
    options,
  );
  return response.json();
};
