import { SkeletonCard } from "@/components";

const LoadingLayout = () => (
  <main
    data-testid="loading-layout-wrapper"
    className="w-full grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-14 mt-10 mb-5"
  >
    {Array.from({ length: 8 }).map((_, position) => (
      <SkeletonCard key={position} />
    ))}
  </main>
);

export default LoadingLayout;
