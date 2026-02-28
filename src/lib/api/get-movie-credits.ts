export async function getMovieCredits(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_API_KEY}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch credits");
  }

  return res.json();
}
