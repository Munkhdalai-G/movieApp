import Skeleton from "react-loading-skeleton";

export default function MovieSectionSkeleton({}) {
  return (
    <div className="px-4 lg:px-20 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Skeleton width={150} height={30} />
        <Skeleton width={100} height={20} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <Skeleton height={250} />
              <div className="mt-2">
                <Skeleton width={60} height={15} />
                <Skeleton width={120} height={20} className="mt-2" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
