import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import LoadingLayout from "./loading";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
  }),
}));

describe("LoadingLayout", () => {
  it("should be return component correct", () => {
    const { getByTestId } = render(<LoadingLayout />);

    const loadingLayoutWrapper = getByTestId("loading-layout-wrapper");

    expect(loadingLayoutWrapper).toBeInTheDocument();
  });
});
