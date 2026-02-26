// lib/get-upcoming-movies.ts
import { MovieList } from "./types";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.TMDB_API_KEY; // recommended

export const getUpcomingMovies = async (
  page: number = 1,
): Promise<MovieList> => {
  const url = `${baseUrl}/movie/upcoming?language=en-US&page=${page}&api_key=${apiKey}`;
  const response = await fetch(url);

  const data: MovieList = await response.json();
  return data;
};
