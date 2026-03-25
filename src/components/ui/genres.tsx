"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { getGenres } from "@/lib/api/get-genres";
import { Genre } from "@/lib/api/types";
import { useRouter } from "next/navigation";

export function GenresDrop({ onClose }: { onClose?: () => void }) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const router = useRouter();

  useEffect(() => {
    getGenres().then((data) => setGenres(data.genres ?? []));
  }, []);

  return (
    <div className="absolute top-full left-0 z-50 pt-1 w-77 lg:w-130">
      <div className="border shadow-2xl border-gray-300 dark:border-gray-700 w-full rounded-2xl bg-white dark:bg-gray-900">
        <div className="flex flex-col gap-1 px-4 pt-4 pb-2">
          <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
            Genres
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            See lists of movies by genre
          </p>
          <div className="h-px bg-gray-200 dark:bg-gray-700 rounded-full mt-2" />
        </div>

        <div className="flex flex-wrap gap-3 px-3 pb-4 pt-2">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => {
                router.push(`/genre/${genre.name.toLowerCase()}-${genre.id}`);
                onClose?.();
              }}
              className="flex items-center gap-1 font-bold border border-gray-200 dark:border-gray-600 rounded-xl px-1.5 py-1 text-xs text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              {genre.name}
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GenresMain() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const router = useRouter();

  useEffect(() => {
    getGenres().then((data) => setGenres(data.genres ?? []));
  }, []);

  return (
    <div className="flex justify-center relative pt-1">
      <div className="w-90">
        <div className="flex flex-col gap-1 px-4 pt-4 pb-2">
          <h2 className="font-bold text-2xl">Genres</h2>
          <p className="text-lg">See lists of movies by genre</p>
        </div>

        <div className="flex flex-wrap gap-3 px-3 pb-4 pt-2">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() =>
                router.push(`/genre/${genre.name.toLowerCase()}-${genre.id}`)
              }
              className="flex items-center gap-1 font-bold border border-gray-200 rounded-xl px-1.5 py-1 text-xs hover:bg-gray-50 transition"
            >
              {genre.name}
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
