import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import SearchLayout from "./layout";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
  }),
}));

describe("SearchLayout", () => {
  it("should be return component correct", () => {
    const { getByTestId } = render(
      <SearchLayout>
        <h1>Hello</h1>
      </SearchLayout>
    );

    const layoutWrapper = getByTestId("search-layout-wrapper");

    expect(layoutWrapper).toBeInTheDocument();
  });
});
