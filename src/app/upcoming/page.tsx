"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { getUpcomingMovies } from "@/lib/api/get-upcoming-movies";
import MovieCard from "@/components/ui/MovieCard";
import { Movie } from "@/lib/api/types";
import { useSearchParams } from "next/navigation";
import PaginationCopy from "@/components/ui/paginationCopy";

function UpComingContent() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = Number(page) || 1;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getUpcomingMovies(String(currentPage));
      setMovies(data.results);
      setTotalPages(data.total_pages);
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
        <p className="font-bold text-2xl">Up Coming</p>
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

export default function UpComing() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <UpComingContent />
    </Suspense>
  );
}
