import { getUpcomingMovies } from "@/lib/get-upcoming-movies";
import MovieCard from "@/components/ui/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { Film } from "lucide-react";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Moon } from "lucide-react";

export default async function UpComing() {
  const { results } = await getUpcomingMovies();
  console.log(results.length);

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
      <div className=" flex justify-evenly pt-8 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl">Up Coming</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {results.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
