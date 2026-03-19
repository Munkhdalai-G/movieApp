import { Star, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getNowPlaying } from "@/lib/api/get-now-playing";
import TrailerButton from "./WatchTrailerButton";
import { getMovieTrailer } from "@/lib/api/get-movie-trailer";

export default async function Heros({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const data = await getNowPlaying();
  const movies = data.results?.slice(0, 5) ?? [];

  // ✅ Fetch all trailers in parallel
  const trailerUrls = await Promise.all(
    movies.map((movie) => getMovieTrailer(String(movie.id))),
  );

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={movie.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[70vh]">
              {/* IMAGE */}
              <div className="w-full h-75 sm:h-100 lg:h-full">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16">
                <div className="flex pt-5 flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <p className="text-lg sm:text-xl">
                    Now Playing:
                    <span className="block text-2xl sm:text-3xl font-bold">
                      {movie.title}
                    </span>
                  </p>
                  <span className="flex items-center gap-2 text-lg">
                    <Star className="text-yellow-500 fill-yellow-500" />
                    {movie.vote_average?.toFixed(1)}/10
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base leading-relaxed max-w-lg">
                  {movie.overview}
                </p>

                <div className="mt-6   px-2 py-2 rounded-md   w-45 bg-black text-white dark:border dark:border-white ">
                  {/* ✅ Each movie gets its own trailer */}
                  <TrailerButton trailerUrl={trailerUrls[index]} />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
