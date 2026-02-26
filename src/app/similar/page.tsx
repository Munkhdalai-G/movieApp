import MovieCard from "@/components/ui/MovieCard";
import { getSimilarMovies } from "@/lib/get-similar-movies";

type SimilarType = {
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function Similar({ searchParams }: SimilarType) {
  const { movieId } = await searchParams;
  const { results } = await getSimilarMovies(movieId, "1");

  return (
    <div>
      <div className=" flex justify-evenly pt-2 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl">More Like This</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
