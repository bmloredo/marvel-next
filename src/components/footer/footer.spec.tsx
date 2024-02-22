import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Footer } from ".";

describe("Footer", () => {
  it("should be return component correct", () => {
    const { getByTestId } = render(<Footer />);

    const footerContainer = getByTestId("footer-element");

    expect(footerContainer).toBeInTheDocument();
  });
});
