"use client";

import { ArrowRight, Star } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Movie } from "@/lib/api/types";
import Link from "next/link";

interface SearchBarProps {
  movies: Movie[];
  query: string;
  onClose?: () => void; // ← add the ?
}

export function SearchBar({ movies, query, onClose }: SearchBarProps) {
  return (
    <div className="absolute top-full left-0 right-0 z-50 flex justify-center pt-1">
      <div className="border shadow-2xl border-gray-300 w-75 rounded-2xl bg-white py-2">
        {movies.map((movie, index) => (
          <div key={movie.id}>
            <Link
              href={`/movie/${movie.id}`}
              onClick={onClose}
              className="flex items-center px-2 py-0.5 hover:bg-gray-50 transition"
            >
              {/* Image */}
              <img
                className="w-20 py-1.5 px-1.5"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                    : "/placeholder.jpg"
                }
                alt={movie.title}
              />

              {/* Info Section */}
              <div className="flex flex-col pl-3 flex-1">
                <div className="font-bold text-xl pt-1.5">{movie.title}</div>
                <div className="flex items-center text-xs">
                  <Star className="text-yellow-300 fill-yellow-300" size={16} />
                  {movie.vote_average.toFixed(1)}/10
                </div>
                <div className="pt-2 text-[15px] pl-1">
                  {movie.release_date?.slice(0, 4) ?? "N/A"}
                </div>
              </div>

              {/* See More */}
              <span className="flex text-xs items-center gap-1 pr-3 pt-15">
                See more <ArrowRight size={12} />
              </span>
            </Link>

            {index < movies.length - 1 && (
              <div className="h-px bg-gray-200 mx-2 my-2 rounded-2xl" />
            )}
          </div>
        ))}

        {/* Bottom */}
        <div className="h-px bg-gray-200 mx-2 my-2 rounded-2xl" />
        <Link
          href={`/search?query=${encodeURIComponent(query)}`}
          onClick={onClose}
          className="flex gap-1 px-4 pb-2 hover:bg-gray-50 cursor-pointer transition"
        >
          See all results for <span className="font-semibold">"{query}"</span>
        </Link>
      </div>
    </div>
  );
}

export function SearchBarLoading() {
  return (
    <div className="absolute top-full left-0 right-0 z-50 flex justify-center h-40 pt-1">
      <div className="border shadow-2xl border-gray-300 w-75 rounded-2xl bg-white py-2">
        <div className="flex items-center gap-6 justify-center p-15">
          <Spinner className="size-8" />
        </div>
      </div>
    </div>
  );
}

export function SearchBarNoResult() {
  return (
    <div className="absolute top-full left-0 right-0 z-50 flex justify-center h-25 pt-1">
      <div className="border shadow-2xl border-gray-300 w-75 rounded-2xl bg-white">
        <div className="flex items-center gap-6 justify-center p-8">
          No Result found.
        </div>
      </div>
    </div>
  );
}