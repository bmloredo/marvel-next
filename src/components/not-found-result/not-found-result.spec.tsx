import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { NotFoundResult } from ".";

describe("NotFoundResult", () => {
  it("should be return component correct", () => {
    const { getByText } = render(
      <NotFoundResult title="Title" description="Description example" />
    );

    const titleElement = getByText("Title");
    const ctaToBackElement = getByText("Go to home");
    const descriptionElement = getByText("Description example");

    expect(titleElement).toBeInTheDocument();
    expect(ctaToBackElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
