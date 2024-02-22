import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { SkeletonCard } from ".";

describe("SkeletonCard", () => {
  it("should be return component correct", () => {
    const { getByTestId } = render(<SkeletonCard />);

    const skeletonContainer = getByTestId("skeleton-card-element");

    expect(skeletonContainer).toBeInTheDocument();
  });
});
