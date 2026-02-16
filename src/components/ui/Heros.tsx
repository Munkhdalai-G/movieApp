import { Star } from "lucide-react";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getNowPlaying } from "@/lib/get-now-playing";
import { getMovieById } from "@/lib/get-movie-by-id";

export default async function Heros() {
  return (
    <div>
      {/* className="absolute" */}
      <img className="w-full lg:hidden" src="wicked.jpg" alt="wicked" />
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
                  Elphaba, a misunderstood young woman because of her green
                  skin, and Glinda, a popular girl, become friends at Shiz
                  University in the Land of Oz. After an encounter with the
                  Wonderful Wizard of Oz, their friendship reaches a crossroads.
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
                  Elphaba, a misunderstood young woman because of her green
                  skin, and Glinda, a popular girl, become friends at Shiz
                  University in the Land of Oz. After an encounter with the
                  Wonderful Wizard of Oz, their friendship reaches a crossroads.
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
                  Elphaba, a misunderstood young woman because of her green
                  skin, and Glinda, a popular girl, become friends at Shiz
                  University in the Land of Oz. After an encounter with the
                  Wonderful Wizard of Oz, their friendship reaches a crossroads.
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
      </Carousel>
      <div className="lg:hidden">
        <div className="flex justify-center items-center gap-15 py-4 m:hidden">
          <p className="flex flex-wrap w-29">
            Now Playing: <span className="text-2xl font-bold">Wicked</span>
          </p>
          <span className="flex gap-2">
            <Star className="text-yellow-300 fill-yellow-300" />
            6.9/10
          </span>
        </div>
        <p className="px-8 m:hidden">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        <div className="py-5 pl-7 m:hidden">
          <button className="py-6 text-[14px] border rounded-md flex w-36.25 h-10 bg-black text-white items-center justify-center gap-1">
            <Play className="stroke-1" />
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
}
