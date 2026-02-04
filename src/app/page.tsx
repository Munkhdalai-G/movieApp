import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Movies from "@/components/ui/movies";
import Trailer from "@/components/ui/trailer";

export default function Home() {
  return (
    <div>
      <MovieCard />
    </div>
  );
}

const MovieCard = () => {
  // const {}= props
  return (
    <div>
      <Header />
      <Trailer />
      <Movies />
      <Footer />
    </div>
  );
};
