import { Star } from "lucide-react";

type Movie = {
  id: number;
  title: string;
  rating: number;
  image: string;
};

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
        alt={movie.title}
        className="w-full rounded"
      />
      <div className="bg-gray-100 flex flex-col pl-2 py-2">
        <div className="flex items-center gap-1">
          <Star className="text-yellow-300 fill-yellow-300" size={16} />
          <span>
            {movie.rating}
            <span className="text-gray-400">/10</span>
          </span>
        </div>
        <p>{movie.title}</p>
      </div>
    </div>
  );
}
