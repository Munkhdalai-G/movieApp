import { ArrowRight } from "lucide-react";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { getUpcomingMovies } from "@/lib/get-upcoming-movies";

export default async function UpComing() {
  const { results } = await getUpcomingMovies();
  return (
    <div>
      <div className=" flex justify-evenly pt-8 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl">Up Coming</p>
        <Link href="/upcoming">
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
