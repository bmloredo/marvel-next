import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { SkeletonDetails } from ".";

describe("SkeletonDetails", () => {
  it("should be return component correct", () => {
    const { getByTestId } = render(<SkeletonDetails />);

    const skeletonContainer = getByTestId("skeleton-details-element");

    expect(skeletonContainer).toBeInTheDocument();
  });
});
