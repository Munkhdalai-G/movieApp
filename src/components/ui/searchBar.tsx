"use client";

import { ArrowRight, Star } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Movie } from "@/lib/api/types";
import Link from "next/link";

interface SearchBarProps {
  movies: Movie[];
  query: string;
  onClose?: () => void;
}

export function SearchBar({ movies, query, onClose }: SearchBarProps) {
  return (
    <div className="absolute top-full left-0 right-0 z-50 flex justify-center pt-1">
      <div className="border shadow-2xl border-gray-300 w-75 lg:w-96 rounded-2xl bg-white py-2">
        {movies.map((movie, index) => (
          <div key={movie.id}>
            <Link
              href={`/movie/${movie.id}`}
              onClick={onClose}
              className="flex items-center px-2 py-0.5 hover:bg-gray-50 transition"
            >
              {/* Image */}
              <img
                className="w-14 h-20 lg:w-16 lg:h-24 object-cover rounded py-1.5 px-1.5 shrink-0"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                    : "/placeholder.jpg"
                }
                alt={movie.title}
              />

              {/* Info Section */}
              <div className="flex flex-col pl-2 flex-1 min-w-0">
                <div className="font-semibold text-sm lg:text-base leading-tight line-clamp-2">
                  {movie.title}
                </div>
                <div className="flex items-center text-xs lg:text-sm mt-1">
                  <Star
                    className="text-yellow-300 fill-yellow-300 shrink-0"
                    size={12}
                  />
                  <span className="ml-0.5">
                    {movie.vote_average.toFixed(1)}/10
                  </span>
                </div>
                <div className="text-xs lg:text-sm text-gray-500 mt-1">
                  {movie.release_date?.slice(0, 4) ?? "N/A"}
                </div>
              </div>

              {/* See More */}
              <span className="flex text-xs lg:text-sm items-center gap-1 pl-2 pr-2 shrink-0 self-center">
                See more <ArrowRight size={12} />
              </span>
            </Link>

            {index < movies.length - 1 && (
              <div className="h-px bg-gray-200 mx-2 my-1 rounded-2xl" />
            )}
          </div>
        ))}

        {/* Bottom */}
        <div className="h-px bg-gray-200 mx-2 my-2 rounded-2xl" />
        <Link
          href={`/search?query=${encodeURIComponent(query)}`}
          onClick={onClose}
          className="flex gap-1 px-4 pb-2 text-sm lg:text-base hover:bg-gray-50 cursor-pointer transition"
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
      <div className="border shadow-2xl border-gray-300 w-75 lg:w-96 rounded-2xl bg-white py-2">
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
      <div className="border shadow-2xl border-gray-300 w-75 lg:w-96 rounded-2xl bg-white">
        <div className="flex items-center gap-6 justify-center p-8">
          No Result found.
        </div>
      </div>
    </div>
  );
}
