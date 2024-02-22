import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import DetailsPage from "./page";

describe("DetailsPage", () => {
  it("should be return component correct", async () => {
    const Resolved = await DetailsPage({
      params: { name: "iron", id: "1009487" },
    });
    const { getByText } = render(Resolved);

    const titlePageElement = getByText("You searched for: iron");

    expect(titlePageElement).toBeInTheDocument();
  });

  it("should be return component without data of content", async () => {
    const Resolved = await DetailsPage({
      params: { name: "iron", id: "1017294" },
    });
    const { getByText} = render(Resolved);

    const titlePageElement = getByText("You searched for: iron");

    expect(titlePageElement).toBeInTheDocument();
  });
});
