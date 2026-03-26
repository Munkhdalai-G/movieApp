import { GenresMain } from "@/components/ui/genres";
import MovieCard from "@/components/ui/MovieCard";
import { getSearch } from "@/lib/api/get-search";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;
  const { results } = await getSearch(query);

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Results for <span className="text-gray-500">"{query}"</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <GenresMain />
    </div>
  );
}
