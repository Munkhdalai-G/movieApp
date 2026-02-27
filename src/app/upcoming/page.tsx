"use client";

import { useEffect, useState } from "react";
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
import { Movie } from "@/lib/types";
import { useSearchParams } from "next/navigation";

export default function UpComing() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getUpcomingMovies(page);
      setMovies(data.results);
    };
    fetchMovies();
  }, [page]);

  const changePageNumber = (pageNumber: number) => {
    // setPage(pageNumber);
  };

  return (
    <div>
      <div className="flex justify-evenly pt-2 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl">Up Coming</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {movies.slice(0, 10).map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${Number(page) - 1}`} />
          </PaginationItem>

          {["1", "2", "3"].map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={`?page=${pageNumber}`}
                isActive={pageNumber === String(page)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href={`?page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
