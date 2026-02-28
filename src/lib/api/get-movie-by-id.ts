import { MovieDetails } from "./types";

const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTczYzYyMWJhZmM3MDEwZWE4ZmEyYmE4YjU5NTM5NiIsIm5iZiI6MTc3MDc4NDQ5OC44OTQsInN1YiI6IjY5OGMwNmYyMzE0ZGVhYzU4OWQ1NDExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t9aC3Jj0Et0C1dlnasfzMbyXxIJrwm8VZClHKL6-pYI";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getMovieById = async (movieId: string): Promise<MovieDetails> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options,
  );
  const data = await response.json();
  return data;
};
