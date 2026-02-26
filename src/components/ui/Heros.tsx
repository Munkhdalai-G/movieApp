import { Star, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getNowPlaying } from "@/lib/get-now-playing";

export default async function Heros() {
  const data = await getNowPlaying();
  const movies = data.results;

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {movies?.slice(0, 5).map((movie) => (
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
              <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-8 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
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

                <div className="mt-6">
                  <button className="flex items-center gap-2 px-6 py-3 text-sm rounded-md bg-black text-white">
                    <Play className="stroke-1" />
                    Watch Trailer
                  </button>
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

<Carousel className="hidden lg:block relative">
  <CarouselContent>
    <CarouselItem>
      <div
        className="relative w-full min-h-full bg-cover h-screen bg-center"
        style={{ backgroundImage: "url('/wicked.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT */}
        <div className="relative z-10 text-white flex flex-col justify-center min-h-screen px-4 sm:px-8 lg:px-20 pb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
            <p className="text-lg sm:text-xl">
              Now Playing:
              <span className="block text-2xl sm:text-3xl font-bold">
                {/* {Movie.} */}
              </span>
            </p>

            <span className="flex items-center gap-2 text-lg">
              <Star className="text-yellow-300 fill-yellow-300" />
              6.9/10
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm  w-100 leading-relaxed">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>

          <div className="mt-6">
            <button className="flex items-center gap-2 px-6 py-3 text-sm border rounded-md bg-black text-white">
              <Play className="stroke-1" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div
        className="relative w-full min-h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/wicked.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT */}
        <div className="relative z-10 text-white flex flex-col justify-center min-h-screen px-4 sm:px-8 lg:px-20 pb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
            <p className="text-lg sm:text-xl">
              Now Playing:
              <span className="block text-2xl sm:text-3xl font-bold">
                Wicked
              </span>
            </p>

            <span className="flex items-center gap-2 text-lg">
              <Star className="text-yellow-300 fill-yellow-300" />
              6.9/10
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm  w-100 leading-relaxed">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>

          <div className="mt-6">
            <button className="flex items-center gap-2 px-6 py-3 text-sm border rounded-md bg-black text-white">
              <Play className="stroke-1" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div
        className="relative w-full min-h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/wicked.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT */}
        <div className="relative z-10 text-white flex flex-col justify-center min-h-screen px-4 sm:px-8 lg:px-20 pb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
            <p className="text-lg sm:text-xl">
              Now Playing:
              <span className="block text-2xl sm:text-3xl font-bold">
                Wicked
              </span>
            </p>

            <span className="flex items-center gap-2 text-lg">
              <Star className="text-yellow-300 fill-yellow-300" />
              6.9/10
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm  w-100 leading-relaxed">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>

          <div className="mt-6">
            <button className="flex items-center gap-2 px-6 py-3 text-sm border rounded-md bg-black text-white">
              <Play className="stroke-1" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
</Carousel>;
