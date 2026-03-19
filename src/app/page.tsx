import Heros from "@/components/ui/Heros";
import UpComing from "@/components/ui/upcoming";
import TopRated from "@/components/ui/toprated";
import Popular from "@/components/ui/popular";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { GenresMain } from "@/components/ui/genres";

export default async function Home({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  return (
    <SkeletonTheme baseColor="#1f1f1f" highlightColor="#2c2c2c">
      <>
        <Heros params={params} />
        <UpComing />
        <TopRated />
        <Popular />
        <GenresMain />
      </>
    </SkeletonTheme>
  );
}

// mobile ----- css ,  details--director writer stars,
