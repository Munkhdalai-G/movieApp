import { ArrowRight } from "lucide-react";
import MovieCard from "./MovieCard";
import Link from "next/link";

export default function UpComing({ movies }) {
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
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={{
              id: movie.id,
              title: movie.title,
              rating: 1,
              image: movie.poster_path,
            }}
          />
        ))}
      </div>
    </div>
  );
}
