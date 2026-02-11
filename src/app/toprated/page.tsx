import MovieCard from "@/components/ui/MovieCard";

export default function TopRated({}) {
  const movies = [
    { id: 1, title: "Dear Santa", rating: 6.9, image: "dear santa.jpg" },
    { id: 2, title: "Dear Santa", rating: 6.9, image: "dear santa.jpg" },
    { id: 3, title: "Dear Santa", rating: 6.9, image: "dear santa.jpg" },
    { id: 4, title: "Dear Santa", rating: 6.9, image: "dear santa.jpg" },
    { id: 5, title: "Dear Santa", rating: 6.9, image: "dear santa.jpg" },
    { id: 6, title: "Dear Santa", rating: 6.9, image: "dear santa.jpg" },
  ];

  return (
    <div>
      <div className=" flex justify-evenly pt-8 pb-3 items-center lg:justify-between lg:px-20">
        <p className="font-bold text-2xl">Top Rated</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
