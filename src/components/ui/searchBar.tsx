import { ArrowRight, Star } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

const Search = Array(5).fill({
  title: "Wicked",
  rating: "6.9/10",
  year: "2024",
  image: "dear santa.jpg",
});

export function SearchBar() {
  return (
    <div className="flex justify-center pt-1">
      <div className="border shadow-2xl border-gray-300 w-75 rounded-2xl bg-white py-2">
        {Search.map((movie, index) => (
          <div key={index}>
            <div key={index} className="flex items-center px-2 py-0.5 ">
              {/* Image */}
              <img
                className="w-20 py-1.5 px-1.5"
                src={movie.image}
                alt={movie.title}
              />

              {/* Info Section */}
              <div className="flex flex-col pl-3 flex-1">
                <div className="font-bold text-xl pt-1.5">{movie.title}</div>

                <div className="flex items-center text-xs">
                  <Star className="text-yellow-300 fill-yellow-300" size={16} />
                  {movie.rating}
                </div>

                <div className="pt-2 text-[15px] pl-1">{movie.year}</div>
              </div>

              {/* See More */}
              <button className="flex text-xs items-center gap-1 pr-3 pt-15">
                See more <ArrowRight size={12} />
              </button>
            </div>
            <div className="h-px bg-gray-200 mx-2 my-2 rounded-2xl" />
          </div>
        ))}

        {/* Bottom */}
        <button className="flex  gap-1 px-4 pb-2  hover:bg-gray-50 cursor-pointer transition">
          See all results for <span className="font-semibold">"Wicked"</span>
        </button>
      </div>
    </div>
  );
}
export function SearchBarLoading() {
  return (
    <div className="flex justify-center h-40 pt-1">
      <div className="border shadow-2xl border-gray-300 w-75 rounded-2xl bg-white py-2 ">
        <div className="flex items-center gap-6 justify-center p-15 ">
          <Spinner className="size-8" />
        </div>
      </div>
    </div>
  );
}
export function SearchBarNoResult() {
  return (
    <div className="flex justify-center h-25 pt-1">
      <div className="border shadow-2xl border-gray-300 w-75 rounded-2xl bg-white ">
        <div className="flex items-center gap-6 justify-center p-8 ">
          No Result found.
        </div>
      </div>
    </div>
  );
}
