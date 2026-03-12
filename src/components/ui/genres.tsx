import { ChevronRight } from "lucide-react";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];

export function GenresDrop() {
  return (
    <div className="absolute top-full left-0 right-0 z-50 flex justify-center pt-1">
      <div className="border shadow-2xl border-gray-300 w-77 rounded-2xl bg-white">
        {/* Header */}
        <div className="flex flex-col gap-1 px-4 pt-4 pb-2">
          <h2 className="font-bold text-2xl">Genres</h2>
          <p className="text-lg">See lists of movies by genre</p>
          <div className="h-px bg-gray-200 rounded-full mt-2" />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 px-3 pb-4 pt-2">
          {genres.map((genre) => (
            <button
              key={genre}
              className="flex items-center gap-1 font-bold border border-gray-200 rounded-xl px-1.5 py-1 text-xs hover:bg-gray-50 transition"
            >
              {genre}
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export function GenresMain() {
  return (
    <div className="flex justify-center relative pt-1">
      <div className="w-90">
        {/* Header */}
        <div className="flex flex-col gap-1 px-4 pt-4 pb-2">
          <h2 className="font-bold text-2xl">Genres</h2>
          <p className="text-lg">See lists of movies by genre</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 px-3 pb-4 pt-2">
          {genres.map((genre) => (
            <button
              key={genre}
              className="flex items-center gap-1 font-bold border border-gray-200 rounded-xl px-1.5 py-1 text-xs hover:bg-gray-50 transition"
            >
              {genre}
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
