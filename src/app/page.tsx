import Heros from "@/components/ui/Heros";
import UpComing from "@/components/ui/upcoming";
import TopRated from "@/components/ui/toprated";
import Popular from "@/components/ui/popular";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

import { Genres, GenresSecond } from "@/components/ui/genres";
import {
  SearchBar,
  SearchBarLoading,
  SearchBarNoResult,
} from "@/components/ui/searchBar";

export default async function Home() {
  return (
    <SkeletonTheme baseColor="#1f1f1f" highlightColor="#2c2c2c">
      <>
        <Heros />
        <UpComing />
        <TopRated />
        <Popular />

        {/* <SearchBar />
        <SearchBarLoading />
        <SearchBarNoResult />
        <Genres />
        <GenresSecond /> */}
      </>
    </SkeletonTheme>
  );
}

const getTodo = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getTodo();

// Pagination
// Genres
// Trailer
// Search
// dark ,light mode
// skeleton
