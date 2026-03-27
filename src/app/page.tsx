import Heros from "@/components/ui/Heros";
import UpComing from "@/components/ui/upcoming";
import TopRated from "@/components/ui/toprated";
import Popular from "@/components/ui/popular";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

export default async function Home({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  return (
    <SkeletonTheme baseColor="#1f1f1f" highlightColor="#2c2c2c">
      <>
        <div className="lg:px-18">
          <Heros params={params} />
          <UpComing />
          <TopRated />
          <Popular />
        </div>
      </>
    </SkeletonTheme>
  );
}
