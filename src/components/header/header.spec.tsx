import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Header } from ".";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
  }),
}));

describe("Header", () => {
  it("should be return component correct", () => {
    const { getByTestId } = render(<Header />);

    const logoContainer = getByTestId("logo-element");
    const fieldContainer = getByTestId("field-search-element");
    const buttonBackContainer = getByTestId("button-back-page-element");

    expect(logoContainer).toBeInTheDocument();
    expect(fieldContainer).toBeInTheDocument();
    expect(buttonBackContainer).toBeInTheDocument();
  });
});
