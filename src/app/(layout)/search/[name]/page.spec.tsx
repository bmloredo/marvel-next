import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import SearchPage from "./page";

describe("SearchPage", () => {
  it("should be return component correct", async () => {
    const Resolved = await SearchPage({ params: { name: "hulk" } });
    const { getByText } = render(Resolved);

    const titlePageElement = getByText("You searched for: hulk");

    expect(titlePageElement).toBeInTheDocument();
  });

  it("should be return layout not found without result", async () => {
    const Resolved = await SearchPage({ params: { name: "teste" } });
    const { getByTestId } = render(Resolved);

    const titleSectionNotFoundElement = getByTestId("title-not-found");

    expect(titleSectionNotFoundElement).toBeInTheDocument();
  });
});
