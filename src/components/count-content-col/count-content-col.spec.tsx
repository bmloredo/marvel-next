import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { ContentTypeEnum } from "@/enums";

import { CountContentCol } from ".";

describe("CountContentCol", () => {
  it("should be return component correct", () => {
    const { getByText } = render(
      <CountContentCol title={ContentTypeEnum.Comics} quantity={5} />
    );

    const titleElement = getByText("Comics");
    const counterElement = getByText("5");

    expect(titleElement).toBeInTheDocument();
    expect(counterElement).toBeInTheDocument();
  });
});
