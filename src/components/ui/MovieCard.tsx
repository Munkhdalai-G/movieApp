import { Movie } from "@/lib/types";
import { Star } from "lucide-react";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded"
      />
      <div className="bg-gray-100 flex flex-col pl-2 py-2">
        <div className="flex items-center gap-1">
          <Star className="text-yellow-300 fill-yellow-300" size={16} />
          <span>
            {movie.vote_average}
            <span className="text-gray-400">/10</span>
          </span>
        </div>
        <p>{movie.title}</p>
      </div>
    </div>
  );
}
