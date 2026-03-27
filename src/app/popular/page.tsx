"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import MovieCard from "@/components/ui/MovieCard";
import { Movie } from "@/lib/api/types";
import { useSearchParams } from "next/navigation";
import PaginationCopy from "@/components/ui/paginationCopy";
import { getPopularMovies } from "@/lib/api/get-popular-movies";

function PopularContent() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = Number(page) || 1;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies(String(currentPage));
        setMovies(data.results ?? []);
        setTotalPages(data.total_pages ?? 1);
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
        setMovies([]);
        setTotalPages(1);
      }
    };
    fetchMovies();
  }, [currentPage]);

  const generatePagination = (current: number, total: number): number[] => {
    const pages: number[] = [];
    const start = Math.max(1, current - 1);
    const end = Math.min(total, current + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const pages = generatePagination(currentPage, totalPages);

  return (
   <div className="lg:px-20">
      <div className="flex justify-evenly pt-2 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl">Popular</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {movies.slice(0, 10).map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      <PaginationCopy
        currentPage={currentPage}
        totalPages={totalPages}
        pages={pages}
      />
    </div>
  );
}

export default function Popular() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <PopularContent />
    </Suspense>
  );
}
