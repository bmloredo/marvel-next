import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import { fireEvent, render } from "@testing-library/react";

import { ButtonBackPage } from ".";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    back: jest.fn(),
  }),
}));

describe("ButtonBackPage", () => {
  it("should call 'back' function when clicked", () => {
    const { getByTestId } = render(<ButtonBackPage />);

    const backButton = getByTestId("button-back-page-element");

    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);

    expect(useRouter().back).toHaveBeenCalledTimes(1);
  });
});
