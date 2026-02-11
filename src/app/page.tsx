import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Heros from "@/components/ui/Heros";
import UpComing from "@/components/ui/upcoming";
import TopRated from "@/components/ui/toprated";
import Popular from "@/components/ui/popular";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const baseUrl = "https://api.themoviedb.org/3";
const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTczYzYyMWJhZmM3MDEwZWE4ZmEyYmE4YjU5NTM5NiIsIm5iZiI6MTc3MDc4NDQ5OC44OTQsInN1YiI6IjY5OGMwNmYyMzE0ZGVhYzU4OWQ1NDExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t9aC3Jj0Et0C1dlnasfzMbyXxIJrwm8VZClHKL6-pYI";

const popular = baseUrl + "/movie/popular?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};

export default async function Home() {
  const response = await fetch(popular, options);
  const data = await response.json();

  return (
    <SkeletonTheme baseColor="#1f1f1f" highlightColor="#2c2c2c">
      <>
        <Header />
        <Heros />
        <UpComing movies={data.results} />
        <TopRated />
        <Popular />
        <Footer />
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
