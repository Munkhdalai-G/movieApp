"use client";

import { use, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MovieCard from "@/components/ui/MovieCard";
import PaginationCopy from "@/components/ui/paginationCopy";
import { getMoviesByGenre } from "@/lib/api/get-movies-by-genre";
import { Movie } from "@/lib/api/types";
import { GenresMain } from "@/components/ui/genres";

export default function GenrePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = Number(page) || 1;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  // splits "action-28" → name: "action", id: 28
  const { slug } = use(params);
  const lastDash = slug.lastIndexOf("-");
  const genreName = slug.slice(0, lastDash);
  const genreId = Number(slug.slice(lastDash + 1));

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMoviesByGenre(genreId, String(currentPage));
        setMovies(data.results ?? []);
        setTotalPages(data.total_pages ?? 1);
      } catch (error) {
        console.error("Failed to fetch genre movies:", error);
        setMovies([]);
        setTotalPages(1);
      }
    };
    fetchMovies();
  }, [genreId, currentPage]);

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
      <GenresMain />
      <div className="flex justify-evenly pt-2 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl capitalize">{genreName}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {movies.map((movie) => (
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
