// lib/api/get-movie-trailer.ts
import { MovieTrailer } from "./types";

const baseUrl = "https://api.themoviedb.org/3";
const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTczYzYyMWJhZmM3MDEwZWE4ZmEyYmE4YjU5NTM5NiIsIm5iZiI6MTc3MDc4NDQ5OC44OTQsInN1YiI6IjY5OGMwNmYyMzE0ZGVhYzU4OWQ1NDExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t9aC3Jj0Et0C1dlnasfzMbyXxIJrwm8VZClHKL6-pYI";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getMovieTrailer = async (
  movieId: string,
): Promise<string | null> => {
  const response = await fetch(
    `${baseUrl}/movie/${movieId}/videos?language=en-US`,
    options,
  );
  const data = await response.json();
  const trailer = data.results?.find(
    (v: any) => v.type === "Trailer" && v.site === "YouTube",
  );
  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
};
