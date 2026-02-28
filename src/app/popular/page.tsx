import MovieCard from "@/components/ui/MovieCard";
import { getPopularMovies } from "@/lib/api/get-popular-movies";

export default async function Popular() {
  const { results } = await getPopularMovies();
  return (
    <div>
      <div className=" flex justify-evenly pt-2 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl">Popular</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
