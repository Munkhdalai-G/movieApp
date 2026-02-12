import { ArrowRight } from "lucide-react";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { getPopularMovies } from "@/lib/get-popular-movies";

export default async function UpComing() {
  const { results } = await getPopularMovies();

  return (
    <div>
      <div className=" flex justify-evenly pt-8 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl">Popular</p>
        <Link href="/popular">
          <button className="flex font-semibold text-l items-center">
            See more
            <ArrowRight />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {results.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
