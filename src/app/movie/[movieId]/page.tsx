import { Play, Star } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getMovieById } from "@/lib/api/get-movie-by-id";
import MovieCard from "@/components/ui/MovieCard";
import { getSimilarMovies } from "@/lib/api/get-similar-movies";
import TrailerButton from "@/components/ui/WatchTrailerButton";
import { getMovieTrailer } from "@/lib/api/get-movie-trailer";
import { getMovieCredits } from "@/lib/api/get-movie-crew-by-id";

export default async function Detail({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;
  const trailerUrl = await getMovieTrailer(movieId);
  const movie = await getMovieById(movieId);
  const { results: similarMovies } = await getSimilarMovies(movieId);
  const credits = await getMovieCredits(movieId);
  const firstTwoSimilarMovies = similarMovies.slice(0, 2);
  const firstFiveSimilarMovies = similarMovies.slice(0, 5);
  const director =
    credits.crew.find((c) => c.job === "Director")?.name ?? "N/A";
  const writers =
    credits.crew
      .filter((c) => c.department === "Writing")
      .slice(0, 3)
      .map((c) => c.name)
      .join(", ") || "N/A";
  const stars =
    credits.cast
      .slice(0, 3)
      .map((c) => c.name)
      .join(", ") || "N/A";

  return (
    <div className="lg:px-130">
      <div className="flex px-6 py-3 gap-15">
        <div className="flex flex-col">
          <div className="font-bold">{movie.original_title}</div>
          <div>
            {movie.release_date} · {movie.runtime}min
          </div>
        </div>

        <div className="flex items-center">
          <div className="pb-5 pr-1.5">
            <Star className="fill-yellow-300 text-yellow-300 " />
          </div>
          <div className="flex flex-col">
            <div>
              {movie.vote_average?.toFixed(1)}
              <span className="text-gray-500">/10</span>
            </div>
            <div className="text-gray-400 text-sm">{movie.vote_count}k </div>
          </div>
        </div>
      </div>
      {/*123456789*/}
      <div className="relative">
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt=""
        />
        <div className="absolute bottom-3 left-3">
          <TrailerButton trailerUrl={trailerUrl} />
        </div>
      </div>
      {/*123456789*/}
      <div className="flex gap-3 pl-4 pr-8 py-4">
        <div>
          <img
            className="w-50 h-40"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2.5">
            {movie.genres.map((genre) => (
              <div
                key={genre.id}
                className="flex items-center gap-1 font-bold border border-gray-200 rounded-xl px-1.5 py-1 text-xs"
              >
                {genre.name}
              </div>
            ))}
          </div>

          <div className="w-50 text-sm leading-relaxed">{movie.overview}</div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-19.5 pl-4">
          <div className="flex items-center font-bold">director</div>
          <div className="pr-4">{director}</div>
        </div>
        <div className="h-px bg-gray-200 mx-2 rounded-2xl" />
        <div className="flex gap-21 pr-8 pl-4">
          <div className="flex items-center font-bold">Writers</div>
          <div className="">{writers}</div>
        </div>
        <div className="h-px bg-gray-200 mx-2  rounded-2xl" />
        <div className="flex gap-25 pr-4 pl-4">
          <div className="flex items-center font-bold">Stars</div>
          <div className="">{stars}</div>
        </div>
        <div className="h-px bg-gray-200 mx-2  rounded-2xl" />
      </div>
      {/*123456789*/}
      <div>
        <div className=" flex justify-evenly pt-8 pb-3 items-center lg:justify-between lg:px-20">
          <p className="font-bold text-2xl">More like this</p>
          <Link href={`/similar?movieId=${movieId}`}>
            <button className="flex font-semibold text-l items-center">
              See more
              <ArrowRight />
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4 lg:hidden">
          {firstTwoSimilarMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="hidden lg:flex p-4 gap-4">
          {firstFiveSimilarMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
