import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import NotFoundPage from "./not-found";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe("NotFoundPage", () => {
  it("should be return component correct", () => {
    const { getByText } = render(<NotFoundPage />);

    const titleNotFoundElement = getByText("Page not found");

    expect(titleNotFoundElement).toBeInTheDocument();
  });
});
