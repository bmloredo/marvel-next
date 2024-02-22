import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import { render, fireEvent, act } from "@testing-library/react";

import { SearchField } from ".";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe("SearchField", () => {
  it("should call 'onSubmitHero' when the form is submitted", async () => {
    const { getByTestId, getByPlaceholderText } = render(<SearchField />);

    const formElement = getByTestId("field-search-element");
    const fieldElement = getByPlaceholderText("Search hero...");

    expect(formElement).toBeInTheDocument();
    expect(fieldElement).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(fieldElement, { target: { value: "hulk" } });

      fireEvent.submit(formElement);

      expect(useRouter().push).toHaveBeenCalledTimes(1);
    });
  });
});
