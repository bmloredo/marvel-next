import Link from "next/link";
import { INotFoundResult } from "./not-found-result.types";

export const NotFoundResult = ({
  title,
  description = "",
}: INotFoundResult) => {
  const hasDescription = !!description.length;

  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center flex-col gap-4">
      <h1 data-testid="title-not-found" className="text-3xl font-bold">
        {title}
      </h1>

      {hasDescription && <p>{description}</p>}

      <Link
        href="/"
        className="bg-red-500 mt-4 rounded-lg min-w-[220px] flex items-center justify-center h-10"
      >
        Go to home
      </Link>
    </main>
  );
};
