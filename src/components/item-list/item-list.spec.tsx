import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { ItemList } from ".";
import { mockData } from "./__mocks__/item";

describe("ItemList", () => {
  it("should be return component correct", () => {
    const { getByText } = render(<ItemList title="Title" list={mockData} />);

    const titleElement = getByText("Title");
    const itemInList = getByText("Fear Itself: The Fearless (2011) #3");

    expect(titleElement).toBeInTheDocument();
    expect(itemInList).toBeInTheDocument();
  });

  it("should be not return component", () => {
    const { queryByText } = render(<ItemList title="Title" list={[]} />);

    const titleElement = queryByText("Title");

    expect(titleElement).toBeNull();
  });
});
