import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { CardHero } from ".";
import { mockData } from "./__mocks__/hero";

describe("CardHero", () => {
  it("should be return component correct", () => {
    const { getByText } = render(<CardHero hero={mockData} heroName="iron" />);

    const titleElement = getByText("Iron Patriot");
    const titleSeriesElement = getByText("Series");
    const titleComicsElement = getByText("Comics");
    const titleStoriesElement = getByText("Stories");
    const titleEventsElement = getByText("Events");

    expect(titleElement).toBeInTheDocument();
    expect(titleSeriesElement).toBeInTheDocument();
    expect(titleComicsElement).toBeInTheDocument();
    expect(titleStoriesElement).toBeInTheDocument();
    expect(titleEventsElement).toBeInTheDocument();
  });
});
