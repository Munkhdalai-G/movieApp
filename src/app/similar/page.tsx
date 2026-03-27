"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { getSimilarMovies } from "@/lib/api/get-similar-movies";
import MovieCard from "@/components/ui/MovieCard";
import { Movie } from "@/lib/api/types";
import { useSearchParams } from "next/navigation";
import PaginationCopy from "@/components/ui/paginationCopy";
import { GenresMain } from "@/components/ui/genres";

function SimilarContent() {
  const searchParams = useSearchParams();
  const movieId = searchParams.get("movieId") ?? "";
  const page = searchParams.get("page");
  const currentPage = Number(page) || 1;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovies = async () => {
      const data = await getSimilarMovies(movieId, String(currentPage));
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [movieId, currentPage]);

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
        <p className="font-bold text-2xl">More Like This</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <PaginationCopy
  currentPage={currentPage}
  totalPages={totalPages}
  pages={pages}
  paramKey="movieId"
  paramValue={movieId}
/>

      <GenresMain />
    </div>
  );
}

export default function Similar() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SimilarContent />
    </Suspense>
  );
}
