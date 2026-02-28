const baseUrl = "https://api.themoviedb.org/3";

export const getTrailer = async (id: number) => {
  const response = await fetch(`${baseUrl}/movie/${id}/videos?language=en-US`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
    next: { revalidate: 60 }, // optional caching
  });

  const data = await response.json();

  const trailer = data.results.find(
    (video: any) => video.type === "Trailer" && video.site === "YouTube",
  );

  return trailer?.key || null;
};
