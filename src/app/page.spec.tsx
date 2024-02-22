import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import HomePage from "./page";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe("HomePage", () => {
  it("should be return component correct", () => {
    const { getByTestId } = render(<HomePage />);

    const fieldSearchElement = getByTestId("field-search-element");
    const bgIntroductionElement = getByTestId("bg-introduction");

    expect(fieldSearchElement).toBeInTheDocument();
    expect(bgIntroductionElement).toBeInTheDocument();
  });
});
