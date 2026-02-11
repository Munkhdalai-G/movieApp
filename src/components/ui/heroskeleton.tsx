import Skeleton from "react-loading-skeleton";

export default function HeroSkeleton() {
  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <Skeleton height="100vh" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-20">
        <Skeleton width={150} height={20} />
        <Skeleton width={250} height={40} className="mt-2" />
        <Skeleton width={100} height={20} className="mt-4" />
        <Skeleton width="60%" height={20} count={3} className="mt-4" />
        <Skeleton width={160} height={45} className="mt-6" />
      </div>
    </div>
  );
}
