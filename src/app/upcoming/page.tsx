"use client";

import { useState, useEffect } from "react";
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

export default function Upcoming() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getUpcomingMovies(page);
        setMovies(data.results.slice(0, 10));
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [page]);

  const changePageNumber = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  // Dynamic sliding pagination
  const paginationPages = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 5) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // Always show first page
    pages.push(1);

    // Show left ellipsis if current page is far from start
    if (page > 3) pages.push("ellipsis");

    // Show middle pages
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) pages.push(i);
    }

    // Show right ellipsis if current page is far from end
    if (page < totalPages - 2) pages.push("ellipsis");

    // Always show last page
    pages.push(totalPages);

    return pages;
  };

  return (
    <div>
      <div className="flex justify-evenly pt-2 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl">Upcoming</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination className="pb-3">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changePageNumber(page - 1);
              }}
            />
          </PaginationItem>

          {paginationPages().map((pageNumber, idx) =>
            pageNumber === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  isActive={pageNumber === page}
                  onClick={(e) => {
                    e.preventDefault();
                    changePageNumber(pageNumber);
                  }}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ),
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changePageNumber(page + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
