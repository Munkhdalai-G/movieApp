import Footer from "./footer";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Moon } from "lucide-react";
import { Film } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MovieCard from "./MovieCard";
import { getUpcomingMovies } from "@/lib/get-upcoming-movies";

export default async function Detail() {
  const { results } = await getUpcomingMovies();
  return (
    <div>
      <div className="flex justify-between h-6 py-5 items-center px-3 lg:py-7 ">
        <Link href={"/"}>
          <div className="flex  text-indigo-700 h-7 items-center font-bold lg:pl-15 ">
            <Film className="stroke-1 p-0.5 lg:p-0" />
            Movie Z
          </div>
        </Link>
        <div className=" flex gap-4 ">
          <button className="flex items-center border rounded-lg w-25 justify-center gap-1 font-medium max-lg:hidden">
            <ChevronDown size={16} />
            Genre
          </button>
          <input
            className="border rounded-lg p-1.5 w-80 hidden lg:block"
            type="text"
            name=""
            id=""
            placeholder="🔎   type to search"
          />
        </div>
        <div className="flex gap-3 items-center lg:pr-15 ">
          <button className="border rounded-md lg:p-1.5 ">
            <Search className="stroke-1 p-1 lg:p-0.5" />
          </button>
          <button className="border rounded-md lg:p-1.5   ">
            <Moon className="stroke-1 p-1 lg:p-0.5" />
          </button>
        </div>
      </div>
      {/*123456789*/}
      <div className="">
        <img className="" src="wicked.jpg" alt="" />
        <div className="">123</div>
      </div>
      {/*123456789*/}
      <div className="flex gap-3 pl-4 pr-8 py-4">
        <div>
          <img className="w-50 h-40" src="wicked.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2.5">
            <div className="flex items-center gap-1 font-bold border border-gray-200 rounded-xl px-1.5 py-1 text-xs ">
              Fairy tale
            </div>
            <div className="flex items-center gap-1 font-bold border border-gray-200 rounded-xl px-1.5 py-1 text-xs ">
              Pop Musical
            </div>
            <div className="flex items-center gap-1 font-bold border border-gray-200 rounded-xl px-1.5 py-1 text-xs ">
              Fantasy
            </div>
            <div className="flex items-center gap-1 font-bold border border-gray-200 rounded-xl px-1.5 py-1 text-xs ">
              Musical
            </div>
            <div className="flex items-center gap-1 font-bold border border-gray-200 rounded-xl px-1.5 py-1 text-xs ">
              Romance
            </div>
          </div>
          <div className="w-50">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-19.5 pl-4">
          <div className="flex items-center font-bold">director</div>
          <div className="pr-4">Jon M. Chu</div>
        </div>
        <div className="h-px bg-gray-200 mx-2 rounded-2xl" />
        <div className="flex gap-21 pr-8 pl-4">
          <div className="flex items-center font-bold">Writers</div>
          <div className="">Winnie Holzman · Dana Fox · Gregory Maguire</div>
        </div>
        <div className="h-px bg-gray-200 mx-2  rounded-2xl" />
        <div className="flex gap-25 pr-4 pl-4">
          <div className="flex items-center font-bold">Stars</div>
          <div className="">Cynthia Erivo · Ariana Grande · Jeff Goldblum</div>
        </div>
        <div className="h-px bg-gray-200 mx-2  rounded-2xl" />
      </div>
      {/*123456789*/}
      <div>
        <div className=" flex justify-evenly pt-8 pb-3 items-center lg:justify-between lg:px-20">
          <p className="font-bold text-2xl">More like this</p>
          <Link href="/upcoming">
            <button className="flex font-semibold text-l items-center">
              See more
              <ArrowRight />
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
          {results.slice(0, 2).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
