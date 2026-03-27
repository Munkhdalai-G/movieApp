"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getSearch } from "@/lib/api/get-search";
import MovieCard from "@/components/ui/MovieCard";
import { GenresMain } from "@/components/ui/genres";
import PaginationCopy from "@/components/ui/paginationCopy";
import { Movie } from "@/lib/api/types";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const currentPage = Number(searchParams.get("page")) || 1;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      const data = await getSearch(query, String(currentPage));
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [query, currentPage]);

  const generatePagination = (current: number, total: number): number[] => {
    const pages: number[] = [];
    const start = Math.max(1, current - 1);
    const end = Math.min(total, current + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const pages = generatePagination(currentPage, totalPages);

  return (
    <div className="px-6 py-8 lg:px-20">
      <h1 className="text-2xl font-bold mb-6">
        Results for <span className="text-gray-500">"{query}"</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <PaginationCopy
        currentPage={currentPage}
        totalPages={totalPages}
        pages={pages}
        paramKey="query"
        paramValue={query}
      />
      <GenresMain />
    </div>
  );
}

export default function Search() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
